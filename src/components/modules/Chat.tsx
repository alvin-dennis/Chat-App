import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { db, auth } from "@/lib/firebase";
import {
    collection,
    addDoc,
    where,
    serverTimestamp,
    onSnapshot,
    query,
    orderBy,
    type Timestamp,
} from "firebase/firestore";

type Message = {
    id: string;
    text: string;
    createdAt?: Timestamp | null;
    user: string;
    room: string;
    createdAtLocal?: number;
};

type ChatProps = {
    room?: string;
};

export const Chat: React.FC<ChatProps> = ({ room: propRoom }) => {
    const [searchParams] = useSearchParams();
    const room = propRoom ?? searchParams.get("room") ?? "";

    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState<string>("");
    const messagesRef = collection(db, "messages");

    useEffect(() => {
        if (!room) return;

        const queryMessages = query(
            messagesRef,
            where("room", "==", room),
            orderBy("createdAt")
        );
        const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
            const msgs: Message[] = [];
            snapshot.forEach((doc) => {
                const data = doc.data() as Partial<Message> & { createdAtLocal?: number };
                msgs.push({
                    id: doc.id,
                    text: (data.text as string) ?? "",
                    createdAt: (data.createdAt as Timestamp) ?? null,
                    user: (data.user as string) ?? "Anonymous",
                    room: (data.room as string) ?? room,
                    createdAtLocal: data.createdAtLocal ?? undefined,
                });
            });

            msgs.sort((a, b) => {
                const aTs = a.createdAt ? (a.createdAt as Timestamp).toMillis() : a.createdAtLocal ?? 0;
                const bTs = b.createdAt ? (b.createdAt as Timestamp).toMillis() : b.createdAtLocal ?? 0;
                return aTs - bTs;
            });

            setMessages(msgs);
        });

        return () => unsuscribe();
    }, [room, messagesRef]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (newMessage === "") return;
        const localNow = Date.now();
        await addDoc(messagesRef, {
            text: newMessage,
            createdAt: serverTimestamp(),
            createdAtLocal: localNow,
            user: auth.currentUser?.displayName ?? "Anonymous",
            room,
        });

        setNewMessage("");
    };

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <div className="bg-slate-100 p-4 shadow-sm">
                <h1 className="text-xl font-semibold">{room ? `Room: ${room.toUpperCase()}` : "Chat"}</h1>
            </div>

            <div className="flex-1 p-4 overflow-auto space-y-3">
                {messages.map((message) => (
                    <div key={message.id} className="px-3 py-2 bg-slate-50 rounded-md shadow-sm">
                        <span className="font-medium text-slate-800">{message.user}:</span>
                        <span className="ml-2 text-slate-700">{message.text}</span>
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t flex gap-2">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNewMessage(event.target.value)}
                    className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                    placeholder="Type your message here..."
                />
                <button type="submit" className="px-4 py-2 bg-sky-600 text-white rounded-md">
                    Send
                </button>
            </form>
        </div>
    );
};