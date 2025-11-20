import React, { useState } from "react";
import { Auth } from "./Auth";
import { useNavigate } from "react-router-dom";

type LandingProps = {
    isAuth?: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Landing: React.FC<LandingProps> = ({ isAuth, setIsAuth }) => {
    const [localRoom, setLocalRoom] = useState<string>("");
    const navigate = useNavigate();

    const enterChat = () => {
        const room = localRoom.trim();
        if (!room) return;
        navigate(`/chat?room=${encodeURIComponent(room)}`);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-6">
            <div className="max-w-2xl w-full text-center">
                <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Chat App</h1>
                <p className="text-slate-600 mb-6">Join rooms, chat with friends, and share ideas.</p>

                {!isAuth ? (
                    <div className="flex justify-center">
                        <Auth setIsAuth={setIsAuth} />
                    </div>
                ) : (
                    <div className="mt-4 flex items-center justify-center gap-2">
                        <input
                            id="room"
                            value={localRoom}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocalRoom(e.target.value)}
                            placeholder="e.g. general"
                            className="px-4 py-2 border rounded-md w-56 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                        <button
                            onClick={enterChat}
                            className="px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700"
                        >
                            Enter Chat
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Landing;
