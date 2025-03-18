import React, { useState, useEffect, useRef } from 'react';
import QuickAccessCards from './QuickAccessCards';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import ElevenLabsTalkAgent from '../../components/layout/eleven-labs-talk-agent';
export default function ChatContainer() {
    const [hasTyped, setHasTyped] = useState(false);
    const messagesEndRef = useRef(null);

    // Auto-scroll to bottom when new messages arrive
    useEffect(() => {
        if (hasTyped && messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [hasTyped]);

    return (
        <div className="flex-1 flex flex-col overflow-hidden bg-[#0D1520] text-white lg:max-w-6xl mx-auto relative">
            {/* Main Chat UI */}
            <div className="flex-1 overflow-y-auto scrollbar-hide p-4 space-y-4">
                {!hasTyped && <QuickAccessCards />}
                <ChatMessages />
                <div ref={messagesEndRef} />
            </div>
            
            {/* Chat Input at the Bottom */}
            <ChatInput 
                setHasTyped={setHasTyped} 
                hasTyped={hasTyped}
            />

            {/* Eleven Labs Talk Agent */}
            <ElevenLabsTalkAgent />
        </div>
    );
}
