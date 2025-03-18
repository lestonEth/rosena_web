import { createContext, useContext, useState } from 'react';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

// Initialize Gemini
const genAI = new GoogleGenerativeAI("AIzaSyCF_zkoR7_uS4CT1gTHmMODXx-pD49oUro");
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_NONE,
    },
];

const systemMessage = {
    role: "user",
    parts: [{ text: "You are InsureAssist, a professional vehicle insurance assistant. Help users with car insurance questions, claims, and policy details in a clear and friendly manner. Keep responses concise and professional." }],
};


const ChatContext = createContext(null);

export function ChatProvider({ children }) {
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hello! I'm InsureAssist, your vehicle insurance assistant. How can I help you today?",
            isUser: false,
        }
    ]);

    
    const [isTyping, setIsTyping] = useState(false);

    const addMessage = (text, isUser = false) => {
        const newMessage = {
            id: Date.now(),
            text,
            isUser,
        };
        setMessages(prev => [...prev, newMessage]);
    };

    const generateResponse = async (updatedMessages) => {
        setIsTyping(true);
        try {
            const history = updatedMessages.slice(0, -1);
            const currentInput = updatedMessages[updatedMessages.length - 1].text;
    
            // Ensure history starts with a user message
            const chatHistory = [
                systemMessage, // Add the predefined system message
                ...history
                    .filter(msg => msg.isUser) // Only include user messages in history
                    .map(msg => ({
                        role: 'user',
                        parts: [{ text: msg.text }],
                    })),
            ];

            // Start chat session with history
            const chat = model.startChat({
                history: chatHistory,
                safetySettings,
                generationConfig: { 
                    maxOutputTokens: 1000, 
                    temperature: 0.7, // More consistent responses
                    topP: 0.9, // Reduce randomness slightly
                },
            });
            
            // Send user message and get response
            const result = await chat.sendMessage(currentInput);
            const response = await result.response.text();
            addMessage(response, false);
        } catch (error) {
            console.error('Error generating response:', error);
            addMessage("Sorry, I'm having trouble responding. Please try again.", false);
        } finally {
            setIsTyping(false);
        }
    };
    

    const sendMessage = (text) => {
        if (!text.trim()) return;

        // Create temporary updated messages array
        const newUserMessage = {
            id: Date.now(),
            text,
            isUser: true,
        };
        const updatedMessages = [...messages, newUserMessage];

        // Update state and trigger AI response
        setMessages(updatedMessages);
        generateResponse(updatedMessages);
    };

    const value = {
        messages,
        setMessages,
        isTyping,
        setIsTyping,
        addMessage,
        sendMessage,
    };

    return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export const useChat = () => {
    const context = useContext(ChatContext);
    if (context === null) {
        throw new Error('useChat must be used within a ChatProvider');
    }
    return context;
};