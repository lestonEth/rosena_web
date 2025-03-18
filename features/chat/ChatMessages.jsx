import React from 'react';
import { useChat } from '../../context/ChatContext';
import { AnimatePresence, motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

export default function ChatMessages() {
    const { messages, isTyping } = useChat();

    return (
        <div id="chat-messages" className="space-y-4 overflow-y-scroll max-h-[80vh] px-4">
            <AnimatePresence>
                {messages.map(message => (
                    <motion.div 
                        key={message.id} 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${message.isUser ? 'justify-end' : ''}`}
                    >
                        <div className={`max-w-[80%] ${
                            message.isUser 
                                ? 'bg-[#21CDB9]/20 text-white' 
                                : 'bg-[#151F2E] text-white'
                        } p-4 rounded-lg shadow-md`}>
                            <ReactMarkdown>{message.text}</ReactMarkdown>
                        </div>
                    </motion.div>
                ))}

                {isTyping && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex"
                    >
                        <div id="typing-indicator" className="bg-[#151F2E] px-4 py-3 rounded-lg flex space-x-1">
                            <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
                            <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                            <span className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
