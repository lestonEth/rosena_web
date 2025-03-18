
// ChatInput.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useChat } from '../../context/ChatContext';

export default function ChatInput({ setHasTyped, hasTyped }) {
    const [inputValue, setInputValue] = useState('');
    const { sendMessage } = useChat();
    const inputRef = useRef(null);

    // Auto-focus the input when component mounts
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            sendMessage(inputValue);
            setInputValue('');
            setHasTyped(true);
        }
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        if (!hasTyped && e.target.value.trim()) {
            setHasTyped(true);
        }
    };

    return (
        <div className="w-full border-t border-[#263040] p-4 bg-[#151F2E]">
            <form onSubmit={handleSubmit} className="relative flex items-center">
                <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="w-full py-3 px-4 pr-16 rounded-lg text-base bg-[#0D1520] border border-[#263040] text-white focus:outline-none focus:ring-2 focus:ring-[#21CDB9] placeholder-gray-400 transition"
                    placeholder="Type your message here..."
                    aria-label="Chat input"
                />

                {/* Send Button */}
                <button
                    type="submit"
                    disabled={!inputValue.trim()}
                    className={`absolute right-2 top-1/2 -translate-y-1/2 ${
                        inputValue.trim() ? 'bg-[#21CDB9] hover:bg-[#1aa18e]' : 'bg-[#21CDB9]/50 cursor-not-allowed'
                    } text-white p-2 rounded-md transition transform active:scale-95`}
                    aria-label="Send message"
                >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                </button>
            </form>
        </div>
    );
}