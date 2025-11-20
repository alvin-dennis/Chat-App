import React from "react";
import { auth, provider } from "@/lib/firebase";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const Auth: React.FC<{ setIsAuth: React.Dispatch<React.SetStateAction<boolean>> }> = ({ setIsAuth }) => {
    const signInWithGoogle = async (): Promise<void> => {
        try {
            const result = await signInWithPopup(auth, provider);
            cookies.set("auth-token", result.user.refreshToken);
            setIsAuth(true);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="flex flex-col items-center gap-3">
            <p className="text-slate-700">Sign in with Google to continue</p>
            <button
                onClick={signInWithGoogle}
                className="px-4 py-2 bg-white border rounded-md shadow-sm hover:bg-slate-50"
            >
                Sign in with Google
            </button>
        </div>
    );
};