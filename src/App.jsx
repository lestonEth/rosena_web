import React from 'react';
import { UIProvider } from './context/UIContext';
import { ChatProvider } from './context/ChatContext';
import { useUI } from './context/UIContext';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import ChatContainer from './features/chat/ChatContainer';
import FAQContainer from './features/faq/FAQContainer';
import HistoryContainer from './features/history/HistoryContainer';
import MobileNavToggle from './components/ui/MobileNavToggle';
import AccountContainer from './features/account/AccountContainer';

export default function App() {
    return (
        <UIProvider>
            <ChatProvider>
                <div className="bg-[#0D1520] text-gray-900 dark:text-gray-200 min-h-screen">
                    <div id="app" className="flex flex-col md:flex-row h-screen">
                        <MobileNavToggle />
                        <Sidebar />

                        {/* Main content */}
                        <div className="flex-1 flex flex-col overflow-hidden">
                            <Header />

                            <TabContent />
                        </div>
                    </div>
                </div>
            </ChatProvider>
        </UIProvider>
    );
}

function TabContent() {
    const { activeTab } = useUI();

    return (
        <>
            <div className={`tab-content ${activeTab === 'chat-tab' ? 'active' : ''} flex-1 flex flex-col overflow-hidden`}>
                <ChatContainer />
            </div>

            <div className={`tab-content ${activeTab === 'faq-tab' ? 'active' : ''} flex-1 overflow-y-auto scrollbar-hide p-4`}>
                <FAQContainer />
            </div>

            <div className={`tab-content ${activeTab === 'history-tab' ? 'active' : ''} flex-1 overflow-y-auto scrollbar-hide p-4`}>
                <HistoryContainer />
            </div>

            <div className={`tab-content ${activeTab === 'account-tab' ? 'active' : ''} flex-1 overflow-y-auto scrollbar-hide p-4`}>
                <AccountContainer />
            </div>
        </>
    );
}