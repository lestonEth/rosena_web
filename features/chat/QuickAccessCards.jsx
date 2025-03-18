// QuickAccessCards.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
    History,
    HelpCircle,
    Rocket,
    Settings,
    TrendingUp,
    Zap
} from 'lucide-react';

const Card = ({ icon, title, description, color, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut" 
            }}
            whileHover={{ 
                scale: 1.03,
                boxShadow: `0 0 15px 2px rgba(${color}, 0.3)` 
            }}
            className="glass-card rounded-xl p-5 flex flex-col cursor-pointer bg-[#151F2E]/50 backdrop-blur-sm border border-[#263040]/50"
        >
            <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg" style={{ background: `rgba(${color}, 0.1)`, border: `1px solid rgba(${color}, 0.2)` }}>
                    {icon}
                </div>
                <div className="flex-1">
                    <h3 className="text-base font-semibold text-white mb-1">{title}</h3>
                    <p className="text-sm text-gray-300 opacity-80">{description}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default function QuickAccessCards() {
    const cards = [
        {
            icon: <History className="h-5 w-5" style={{ color: 'rgb(33, 205, 185)' }} />,
            title: "Recent History",
            description: "View your recent chats and actions.",
            color: "33, 205, 185"
        },
        {
            icon: <HelpCircle className="h-5 w-5" style={{ color: 'rgb(251, 191, 36)' }} />,
            title: "Most Asked Questions",
            description: "Find answers to common queries.",
            color: "251, 191, 36"
        },
        {
            icon: <Rocket className="h-5 w-5" style={{ color: 'rgb(79, 70, 229)' }} />,
            title: "Smart Suggestions",
            description: "Get AI-generated recommendations.",
            color: "79, 70, 229"
        },
        {
            icon: <Settings className="h-5 w-5" style={{ color: 'rgb(16, 185, 129)' }} />,
            title: "Quick Tools",
            description: "Access frequently used tools.",
            color: "16, 185, 129"
        },
        {
            icon: <TrendingUp className="h-5 w-5" style={{ color: 'rgb(255, 87, 51)' }} />,
            title: "Trending Topics",
            description: "Stay updated on popular discussions.",
            color: "255, 87, 51"
        },
        {
            icon: <Zap className="h-5 w-5" style={{ color: 'rgb(234, 179, 8)' }} />,
            title: "Instant AI Actions",
            description: "Perform AI-assisted tasks instantly.",
            color: "234, 179, 8"
        }
    ];

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full py-8"
        >
            <div className="mb-8 text-center">
                <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-white/70 mb-2"
                >
                    Quick Access
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl font-medium text-white"
                >
                    How can I help you today?
                </motion.h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                        color={card.color}
                        index={index}
                    />
                ))}
            </div>
        </motion.div>
    );
}