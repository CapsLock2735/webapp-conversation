import React from 'react'

interface AdvisorCardProps {
    name?: string
    title?: string
    match_reason?: string
    match_score?: string
    status?: 'Available' | 'Busy' | 'Offline'
    avatarUrl?: string
    price?: string
}

const AdvisorCard: React.FC<AdvisorCardProps> = ({
    name = "David Wilson",
    title = "Psychic",
    match_reason = "",
    match_score = "",
    status = "Available",
    avatarUrl = "/astriva_avatar/Bad@3x.png",
    price = "$0/Min"
}) => {
    return (
        <div className="mt-4 max-w-sm rounded-[24px] overflow-hidden relative font-sans shadow-lg animate-fade-in-up">
            {/* Background with custom gradient/shape */}
            <div className="bg-[#6d28d9] p-4 flex flex-col relative z-10 transition-all hover:bg-[#5b21b6]">
                <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                        {/* Avatar with status indicator */}
                        <div className="relative shrink-0">
                            <div className="w-12 h-12 rounded-full border-2 border-white/20 overflow-hidden bg-gray-300">
                                <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
                            </div>
                            <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#6d28d9] ${status === 'Available' ? 'bg-green-400' : 'bg-red-400'}`}></div>
                        </div>

                        <div>
                            <h3 className="font-bold text-white text-base leading-tight">{name}</h3>
                            <div className="flex items-center space-x-2 mt-1">
                                <span className="text-purple-200 text-xs font-medium bg-white/10 px-2 py-0.5 rounded-full">
                                    {title}
                                </span>
                            </div>
                            {match_score && (
                                <div className="text-yellow-400 text-xs mt-1.5 flex items-center font-bold">
                                    <span className="mr-1">⚡️</span> {match_score} Match
                                </div>
                            )}
                        </div>
                    </div>

                    <button className="bg-white text-[#5b21b6] text-sm font-bold px-4 py-1.5 rounded-full shadow hover:bg-gray-100 transition-colors shrink-0">
                        Consult
                    </button>
                </div>

                {match_reason && (
                    <div className="mt-3 bg-white/10 p-2.5 rounded-xl border border-white/5">
                        <p className="text-purple-100 text-xs italic leading-relaxed">
                            "{match_reason}"
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AdvisorCard
