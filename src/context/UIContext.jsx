import { createContext, useContext, useState, useEffect } from 'react';

const UIContext = createContext(null);

export function UIProvider({ children }) {
    const [activeTab, setActiveTab] = useState('chat-tab');
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Initialize dark mode based on system preference
    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }

        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            setIsDarkMode(e.matches);
            if (e.matches) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        };

        darkModeMediaQuery.addEventListener('change', handleChange);
        return () => darkModeMediaQuery.removeEventListener('change', handleChange);
    }, []);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev);
        document.documentElement.classList.toggle('dark');
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    const value = {
        activeTab,
        setActiveTab,
        isDarkMode,
        toggleDarkMode,
        isMobileMenuOpen,
        toggleMobileMenu,
    };

    return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export const useUI = () => {
    const context = useContext(UIContext);
    if (context === null) {
        throw new Error('useUI must be used within a UIProvider');
    }
    return context;
};