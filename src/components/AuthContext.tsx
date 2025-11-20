import React from "react";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import Cookies from "universal-cookie";

const cookies = new Cookies();

type AuthContextProps = {
    children: React.ReactNode;
    isAuth: boolean;
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
    setIsInChat?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext: React.FC<AuthContextProps> = ({
    children,
    isAuth,
    setIsAuth,
    setIsInChat,
}) => {
    const signUserOut = async () => {
        await signOut(auth);
        cookies.remove("auth-token");
        setIsAuth(false);
        if (setIsInChat) setIsInChat(false);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-white shadow-sm">
                <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-slate-900">Chat App</h1>
                    {isAuth && (
                        <button
                            onClick={signUserOut}
                            className="px-3 py-1 bg-red-600 text-white rounded-md"
                        >
                            Sign Out
                        </button>
                    )}
                </div>
            </header>

            <main className="flex-1">
                <div className="max-w-5xl mx-auto px-4 py-6">{children}</div>
            </main>
        </div>
    );
};