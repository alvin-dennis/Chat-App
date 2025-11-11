import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { MessageCircle, Lock, Zap } from "lucide-react"

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <nav className="flex items-center justify-between px-6 py-4 border-b border-slate-700">
                <div className="flex items-center gap-2">
                    <MessageCircle className="w-8 h-8 text-blue-500" />
                    <span className="text-xl font-bold text-white">ChatFlow</span>
                </div>
                <div className="flex gap-4">
                    <Link to="/login">
                        <Button className="bg-blue-600 hover:bg-blue-700">Login</Button>
                    </Link>
                </div>
            </nav>

            <main className="flex flex-col items-center justify-center px-6 py-20 text-center">
                <h1 className="text-5xl font-bold text-white mb-6">Connect Instantly with ChatFlow</h1>
                <p className="text-xl text-slate-300 mb-12 max-w-2xl">
                    Experience seamless real-time messaging with end-to-end encryption. Chat with friends, teams, and communities
                    securely.
                </p>
                <div className="flex gap-4">
                    <Link to="/login">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                            Get Started Free
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 w-full max-w-4xl">
                    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                        <MessageCircle className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
                        <h3 className="text-lg font-semibold text-white mb-2">Real-time Chat</h3>
                        <p className="text-slate-400">Instant message delivery with real-time updates.</p>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                        <Lock className="w-12 h-12 text-green-500 mb-4 mx-auto" />
                        <h3 className="text-lg font-semibold text-white mb-2">Secure & Private</h3>
                        <p className="text-slate-400">Your conversations are encrypted end-to-end.</p>
                    </div>
                    <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                        <Zap className="w-12 h-12 text-yellow-500 mb-4 mx-auto" />
                        <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
                        <p className="text-slate-400">Optimized for speed and low latency.</p>
                    </div>
                </div>
            </main>
        </div>
    )
}
