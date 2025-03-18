import React from 'react';
import { useUI } from '../../context/UIContext';

export default function Sidebar() {
    const { activeTab, setActiveTab, isMobileMenuOpen } = useUI();

    const navItems = [
        {
            id: 'chat-tab',
            label: 'AI Chat',
            icon: (
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
            ),
        },
        {
            id: 'faq-tab',
            label: 'FAQ',
            icon: (
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            ),
        },
        {
            id: 'history-tab',
            label: 'Previous Chats',
            icon: (
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            ),
        },
        {
            id: 'account-tab',
            label: 'My Account',
            icon: (
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
            ),
        },
    ];

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <aside
            className={`
        w-full md:w-64 flex-shrink-0 border-[#263040] 
        transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 
        fixed md:relative h-full z-40 bg-[#0D1520] transition-transform duration-300 ease-in-out
      `}
        >
            {/* Logo area */}
            <div className="p-4 border-b border-[#263040] flex items-center">
                <div className="w-8 h-8 mr-2">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#21CDB9]" fill="currentColor">
                        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.09L20 8.5v7l-8 4-8-4v-7l8-4.41z" />
                        <path d="M12 14.5l4-2.5v-3l-4 2.5-4-2.5v3l4 2.5z" />
                    </svg>
                </div>
                <h1 className="text-xl font-bold text-[#21CDB9]">InsureAssist AI</h1>
            </div>

            {/* Navigation */}
            <nav className="p-4">
                <ul className="space-y-2">
                    {navItems.map(item => (
                        <li key={item.id}>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleTabChange(item.id);
                                }}
                                className={`
                  flex items-center p-3 rounded-md transition-colors
                  ${activeTab === item.id
                                        ? 'bg-[#21CDB9]/10 text-[#21CDB9] border-l-5 border-[#21CDB9]'
                                        : 'hover:bg-[#151F2E]'
                                    }
                `}
                            >
                                {item.icon}
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}
