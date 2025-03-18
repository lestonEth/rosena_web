import React, { useState } from 'react';

export default function HistoryContainer() {
    // Sample data for previous chats
    const [chats, setChats] = useState([
        {
            id: 1,
            agent: "Sarah Johnson",
            agentAvatar: "/api/placeholder/40/40",
            topic: "Policy Renewal Discussion",
            date: "Mar 15, 2025",
            time: "2:45 PM",
            excerpt: "We discussed your upcoming policy renewal options and premium adjustments.",
            unread: false,
            status: "completed"
        },
        {
            id: 2,
            agent: "Michael Torres",
            agentAvatar: "/api/placeholder/40/40",
            topic: "Claim Processing - CL-0078532",
            date: "Mar 12, 2025",
            time: "11:30 AM",
            excerpt: "Your collision claim is being processed. We need additional photos of the damage.",
            unread: true,
            status: "in-progress"
        },
        {
            id: 3,
            agent: "Jennifer Lee",
            agentAvatar: "/api/placeholder/40/40",
            topic: "Coverage Options",
            date: "Mar 8, 2025",
            time: "9:15 AM",
            excerpt: "We reviewed additional coverage options for your vehicles and potential discounts.",
            unread: false,
            status: "completed"
        },
        {
            id: 4,
            agent: "Robert Chen",
            agentAvatar: "/api/placeholder/40/40",
            topic: "Payment Arrangement",
            date: "Mar 3, 2025",
            time: "4:20 PM",
            excerpt: "We set up a new payment arrangement for your current policy period.",
            unread: false,
            status: "completed"
        },
        {
            id: 5,
            agent: "Amanda Wilson",
            agentAvatar: "/api/placeholder/40/40",
            topic: "Vehicle Addition Request",
            date: "Feb 27, 2025",
            time: "10:05 AM",
            excerpt: "Discussing the process of adding your new Honda Civic to your current policy.",
            unread: true,
            status: "awaiting-response"
        }
    ]);

    // Filter state
    const [activeFilter, setActiveFilter] = useState('all');

    // Animation states for each chat item
    const [hoveredId, setHoveredId] = useState(null);
    const [expandedId, setExpandedId] = useState(null);

    // Filter chats based on selected filter
    const filteredChats = activeFilter === 'all' 
        ? chats 
        : activeFilter === 'unread' 
            ? chats.filter(chat => chat.unread) 
            : chats.filter(chat => chat.status === activeFilter);

    // Toggle read/unread status
    const toggleReadStatus = (id, e) => {
        e.stopPropagation();
        setChats(chats.map(chat => 
            chat.id === id ? {...chat, unread: !chat.unread} : chat
        ));
    };

    // Handle expanding a chat for more details
    const toggleExpandChat = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    // Get status badge style based on status
    const getStatusBadge = (status) => {
        switch(status) {
            case 'in-progress':
                return "bg-yellow-500/20 text-yellow-400";
            case 'completed':
                return "bg-green-500/20 text-green-400";
            case 'awaiting-response':
                return "bg-blue-500/20 text-blue-400";
            default:
                return "bg-gray-500/20 text-gray-400";
        }
    };

    // Format status for display
    const formatStatus = (status) => {
        return status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    return (
        <div className="flex-1 flex flex-col overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6">
            <h2 className="text-3xl font-bold mb-6 text-blue-400 border-b border-gray-700 pb-4 flex items-center">
                <svg className="w-8 h-8 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z">
                    </path>
                </svg>
                Previous Chats
            </h2>

            {/* Filters Section */}
            <div className="mb-6 flex flex-wrap gap-2">
                <button 
                    onClick={() => setActiveFilter('all')}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        activeFilter === 'all' 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                >
                    All Conversations
                </button>
                <button 
                    onClick={() => setActiveFilter('unread')}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center ${
                        activeFilter === 'unread' 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                >
                    <div className="relative mr-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
                            </path>
                        </svg>
                        <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-2.5 h-2.5"></span>
                    </div>
                    Unread
                </button>
                <button 
                    onClick={() => setActiveFilter('in-progress')}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        activeFilter === 'in-progress' 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                >
                    In Progress
                </button>
                <button 
                    onClick={() => setActiveFilter('awaiting-response')}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        activeFilter === 'awaiting-response' 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                >
                    Awaiting Response
                </button>
                <button 
                    onClick={() => setActiveFilter('completed')}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        activeFilter === 'completed' 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                >
                    Completed
                </button>
            </div>

            {/* Search bar */}
            <div className="mb-6 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z">
                        </path>
                    </svg>
                </div>
                <input 
                    type="text" 
                    placeholder="Search conversations..." 
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                />
            </div>

            {/* Chats list */}
            <div className="flex-1 overflow-y-auto pr-2 space-y-4">
                {filteredChats.length > 0 ? (
                    filteredChats.map(chat => (
                        <div 
                            key={chat.id} 
                            className={`bg-gray-800/70 rounded-xl p-4 cursor-pointer backdrop-blur-sm 
                                transition-all duration-300 border border-transparent 
                                ${hoveredId === chat.id ? 'shadow-lg border-blue-500/30 scale-[1.01]' : 'shadow'} 
                                ${expandedId === chat.id ? 'border-blue-500/50' : ''}`}
                            onMouseEnter={() => setHoveredId(chat.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onClick={() => toggleExpandChat(chat.id)}
                        >
                            <div className="flex justify-between items-start mb-3">
                                <div className="flex items-center">
                                    <div className="relative">
                                        <img 
                                            src={chat.agentAvatar} 
                                            alt={chat.agent} 
                                            className="w-10 h-10 rounded-full bg-blue-400/20 mr-3 border border-blue-400/30"
                                        />
                                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-gray-800"></div>
                                    </div>
                                    <div>
                                        <h3 className={`font-semibold ${chat.unread ? 'text-white' : 'text-gray-200'}`}>{chat.agent}</h3>
                                        <div className="flex items-center text-sm text-gray-400">
                                            <span>{chat.date}</span>
                                            <span className="mx-1.5">•</span>
                                            <span>{chat.time}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusBadge(chat.status)}`}>
                                        {formatStatus(chat.status)}
                                    </span>
                                    {chat.unread && (
                                        <span className="w-2.5 h-2.5 bg-blue-500 rounded-full mt-1.5"></span>
                                    )}
                                </div>
                            </div>
                            
                            <div className="pl-12 sm:pl-14">
                                <h4 className={`text-lg font-medium mb-2 ${chat.unread ? 'text-blue-400' : 'text-gray-200'}`}>
                                    {chat.topic}
                                </h4>
                                
                                <p className={`text-sm ${chat.unread ? 'text-gray-300' : 'text-gray-400'} line-clamp-2`}>
                                    {chat.excerpt}
                                </p>
                                
                                {/* Expanded content - animation with height transition */}
                                <div 
                                    className={`overflow-hidden transition-all duration-300 mt-3 
                                    ${expandedId === chat.id ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="bg-gray-900/40 p-4 rounded-lg border border-gray-700 mb-3">
                                        <p className="text-sm text-gray-300">
                                            This conversation contains details about your {chat.topic.toLowerCase()}. 
                                            The last message was received on {chat.date} at {chat.time}.
                                        </p>
                                    </div>
                                    
                                    <div className="flex space-x-3">
                                        <button className="flex-1 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center justify-center">
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z">
                                                </path>
                                            </svg>
                                            Continue Chat
                                        </button>
                                        <button 
                                            onClick={(e) => toggleReadStatus(chat.id, e)} 
                                            className={`px-4 py-2 rounded-lg transition-colors flex items-center justify-center
                                            ${chat.unread 
                                                ? 'bg-blue-500/10 hover:bg-blue-500/20 text-blue-400' 
                                                : 'bg-gray-700 hover:bg-gray-600 text-gray-300'}`}
                                        >
                                            {chat.unread ? (
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                                        d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76">
                                                    </path>
                                                </svg>
                                            ) : (
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4">
                                                    </path>
                                                </svg>
                                            )}
                                        </button>
                                        <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-colors flex items-center justify-center">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                                </path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                        <svg className="w-16 h-16 text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z">
                            </path>
                        </svg>
                        <h3 className="text-xl font-medium text-gray-400 mb-2">No conversations found</h3>
                        <p className="text-gray-500 max-w-md">
                            {activeFilter === 'all' 
                                ? "You don't have any previous conversations. Start a new chat to get help from our agents." 
                                : `No ${activeFilter === 'unread' ? 'unread' : activeFilter} conversations available.`}
                        </p>
                        <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-blue-500/20 flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                    d="M12 4v16m8-8H4">
                                </path>
                            </svg>
                            Start New Conversation
                        </button>
                    </div>
                )}
            </div>

            {/* New Chat Button (Fixed at bottom) */}
            {filteredChats.length > 0 && (
                <div className="pt-4 border-t border-gray-700 mt-4">
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-blue-500/20 flex items-center justify-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                d="M12 4v16m8-8H4">
                            </path>
                        </svg>
                        Start New Conversation
                    </button>
                </div>
            )}
        </div>
    );
}