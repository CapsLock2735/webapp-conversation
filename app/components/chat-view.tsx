import React, { FC, ReactNode } from 'react'
import { ChevronLeft } from 'lucide-react'

// Simple SVG for the smiley face/status icon (yellow circle)
const StatusIcon = () => (
    <div className="w-8 h-8 bg-gradient-to-br from-yellow-300 to-orange-500 rounded-full flex items-center justify-center shadow-md">
        <div className="text-[#7c2d12] text-xs font-bold">^_^</div>
    </div>
)

interface ChatViewProps {
    onBack: () => void
    children: ReactNode
}

const ChatView: FC<ChatViewProps> = ({ onBack, children }) => {
    return (
        <div className="flex flex-col h-screen bg-[#0f0a1e] text-white overflow-hidden custom-chat-theme max-w-[480px] mx-auto w-full shadow-2xl">
            {/* Custom Header */}
            <div className="shrink-0 flex items-center justify-between px-4 py-3 bg-[#0f0a1e] relative z-20">
                <button onClick={onBack} className="p-2 -ml-2 text-white">
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="flex-1 text-center">
                    <h1 className="text-lg font-bold tracking-wide">SOULGUIDE AI</h1>
                </div>

                <div className="bg-[#2a1f45] px-3 py-1.5 rounded-full text-sm font-semibold border border-[#3b2b63]">
                    $35.55
                </div>
            </div>

            {/* Main Chat Area */}
            {/* We apply a mask or gradient to the bottom if needed, but standard chat works too */}
            <div className="flex-1 overflow-hidden relative bg-[#0f0a1e]">
                {children}
            </div>

            {/* Consultant Card - This might need to be injected into the chat stream or fixed at bottom? 
          In the design (Image 2), it looks like a card IN the chat stream or floating.
          If it's floating, we can put it here. If it's part of the conversation, it should be in ChatList.
          For now, I'll add it as a floating element if it's meant to be persistent, 
          but usually this is an "Answer" type. I'll omit it from Global View to avoid clutter for now, 
          as the user wants the "style", and that specific card looks like a specific bot response.
      */}
        </div>
    )
}

export default ChatView
