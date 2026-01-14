import React from 'react'
import { Search, Home, Users, Sparkles, Share2, MessageCircle } from 'lucide-react'

interface HomeViewProps {
    onStartChat: () => void
}

const HomeView: React.FC<HomeViewProps> = ({ onStartChat }) => {
    return (
        <div className="bg-[#0f0a1e] min-h-screen text-white font-sans pb-20 overflow-y-auto">
            {/* Header / Search */}
            <div className="p-4 pt-10 flex items-center space-x-3">
                <div className="flex-1 bg-[#2a1f45] rounded-full flex items-center px-4 py-2 space-x-2">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Find your answer..."
                        className="bg-transparent outline-none text-sm w-full placeholder-gray-400"
                    />
                </div>
                <div className="bg-[#3b2b63] rounded-full px-4 py-2 text-sm font-semibold">
                    $12.65
                </div>
            </div>

            {/* Hero Section */}
            <div className="mx-4 mt-2 p-6 rounded-2xl bg-gradient-to-r from-[#2c1a59] to-[#120b22] relative overflow-hidden">
                <div>
                    <h1 className="text-2xl font-bold">First <span className="text-[#fbbf24]">3 Mins</span></h1>
                    <h1 className="text-2xl font-bold">Free</h1>
                    <p className="text-gray-400 text-xs mt-1">Find the right advisor, risk free.</p>
                </div>
                <div className="absolute right-[-10px] top-4">
                    {/* Simple visual approximation of the gold coin/badge */}
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-300 to-yellow-600 rounded-full flex items-center justify-center shadow-lg transform rotate-12 border-4 border-yellow-200">
                        <div className="text-center leading-tight">
                            <div className="text-[#7c2d12] font-bold text-xs">New</div>
                            <div className="text-[#7c2d12] font-bold text-xs">User</div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 flex space-x-1">
                    <div className="w-6 h-1 bg-white rounded-full"></div>
                    <div className="w-1.5 h-1 bg-gray-600 rounded-full"></div>
                    <div className="w-1.5 h-1 bg-gray-600 rounded-full"></div>
                    <div className="w-1.5 h-1 bg-gray-600 rounded-full"></div>
                </div>
            </div>

            {/* Featured Advisor */}
            <div className="mx-4 mt-6 bg-[#6d28d9] rounded-3xl p-4 relative pt-12">
                {/* Green Tag */}
                <div className="absolute top-8 left-[-10px] bg-[#10b981] text-white px-3 py-1 rounded-r-full rounded-bl-none shadow-md transform -rotate-3 z-10 font-bold text-sm">
                    $0.00 <span className="text-xs font-normal">/Min</span>
                </div>

                {/* Avatar (Mock) */}
                <div className="absolute top-[-40px] right-4 w-24 h-24 rounded-full border-4 border-[#0f0a1e] overflow-hidden bg-gray-300">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Advisor" className="w-full h-full object-cover" />
                </div>

                <div className="mt-4">
                    <h2 className="text-xl font-bold">David Wilson</h2>
                    <div className="flex items-center space-x-2 mt-1">
                        <span className="bg-[#10b981] w-2 h-2 rounded-full"></span>
                        <span className="text-xs text-[#d8b4fe] bg-[#4c1d95] px-2 py-0.5 rounded-full border border-[#7c3aed]">Available</span>
                        <span className="text-xs text-white bg-transparent border border-white/20 px-2 py-0.5 rounded-full">8 years experience</span>
                    </div>
                    <p className="text-xs text-white/80 mt-3 leading-relaxed">
                        I'm a Certified Clinical Counselor with 6+ years of practice. My expertise lies in supp..
                    </p>

                    <div className="flex items-center justify-between mt-4">
                        <div className="flex -space-x-2">
                            <img className="w-6 h-6 rounded-full border border-white" src="https://randomuser.me/api/portraits/women/2.jpg" alt="User" />
                            <img className="w-6 h-6 rounded-full border border-white" src="https://randomuser.me/api/portraits/men/3.jpg" alt="User" />
                            <img className="w-6 h-6 rounded-full border border-white" src="https://randomuser.me/api/portraits/women/4.jpg" alt="User" />
                            <img className="w-6 h-6 rounded-full border border-white" src="https://randomuser.me/api/portraits/women/5.jpg" alt="User" />
                        </div>
                        <div className="flex text-yellow-400 text-sm">
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            <span className="ml-1 text-white font-bold">5.0</span>
                        </div>
                    </div>

                    <button
                        onClick={onStartChat}
                        className="w-full mt-5 bg-white text-[#4c1d95] font-bold py-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                    >
                        Chat Free
                    </button>
                </div>
            </div>

            {/* All Advisors */}
            <div className="mx-4 mt-8">
                <h3 className="text-lg font-bold mb-4">All Advisors</h3>
                <div className="grid grid-cols-2 gap-4">
                    {/* Advisor Card 1 */}
                    <div className="bg-[#1f1638] rounded-2xl p-3 relative pt-10">
                        <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full border-4 border-[#1f1638] overflow-hidden bg-gray-300">
                            <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Advisor" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-center mt-2">
                            <h4 className="font-bold text-sm">David Wilson</h4>
                            <div className="flex justify-center items-center space-x-1 mt-1 text-xs">
                                <span className="text-yellow-400">★ 4.8</span>
                                <span className="bg-[#064e3b] text-[#34d399] px-1.5 py-0.5 rounded-full text-[10px]">Available</span>
                            </div>
                        </div>
                        <p className="text-[10px] text-gray-400 mt-2 text-center line-clamp-2">"Let's find c and buil "Let's find c and buil"</p>
                        <div className="flex items-center justify-between mt-3">
                            <span className="font-bold text-sm">$0<span className="text-[10px] font-normal text-gray-400">/Min</span></span>
                            <button onClick={onStartChat} className="bg-[#7c3aed] text-white text-xs px-3 py-1.5 rounded-full font-bold">Chat Free</button>
                        </div>
                    </div>

                    {/* Advisor Card 2 */}
                    <div className="bg-[#1f1638] rounded-2xl p-3 relative pt-10">
                        <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full border-4 border-[#1f1638] overflow-hidden bg-gray-300">
                            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Advisor" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-center mt-2">
                            <h4 className="font-bold text-sm">David Wilson</h4>
                            <div className="flex justify-center items-center space-x-1 mt-1 text-xs">
                                <span className="text-yellow-400">★ 4.8</span>
                                <span className="bg-[#451a1a] text-[#f87171] px-1.5 py-0.5 rounded-full text-[10px]">Busy</span>
                            </div>
                        </div>
                        <p className="text-[10px] text-gray-400 mt-2 text-center line-clamp-2">"Let's find c and buil "Let's find c and buil"</p>
                        <div className="flex items-center justify-between mt-3">
                            <span className="font-bold text-sm">$0<span className="text-[10px] font-normal text-gray-400">/Min</span></span>
                            <button onClick={onStartChat} className="bg-[#4c1d95] text-white/50 text-xs px-3 py-1.5 rounded-full font-bold">Chat Free</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Nav */}
            <div className="fixed bottom-0 left-0 right-0 bg-[#0f0a1e]/90 backdrop-blur-md border-t border-white/5 py-3 px-6 flex justify-between items-end z-50">
                <div className="flex flex-col items-center text-gray-400 space-y-1">
                    <Home className="w-5 h-5" />
                    <span className="text-[10px]">Home</span>
                </div>
                <div className="flex flex-col items-center text-white space-y-1">
                    <Users className="w-5 h-5" />
                    <span className="text-[10px] font-bold">Advisors</span>
                </div>

                <div className="relative -top-5" onClick={onStartChat}>
                    <div className="w-14 h-14 bg-gradient-to-br from-[#22d3ee] to-[#4f46e5] rounded-full flex items-center justify-center shadow-glow border-4 border-[#0f0a1e]">
                        <MessageCircle className="w-6 h-6 text-white fill-current" />
                    </div>
                </div>

                <div className="flex flex-col items-center text-gray-400 space-y-1">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-[10px]">Ease</span>
                </div>
                <div className="flex flex-col items-center text-gray-400 space-y-1">
                    <Share2 className="w-5 h-5" />
                    <span className="text-[10px]">Insight</span>
                </div>
            </div>
        </div>
    )
}

export default HomeView
