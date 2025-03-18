import React from 'react';
import { useUI } from '../../context/UIContext';
import Button from '../ui/Button';

export default function Header() {
    const { toggleDarkMode } = useUI();

    return (
        <header className="h-16 border-b border-gray-800 dark:border-darkBorder flex items-center justify-between px-4">
            <div className="flex items-center">
                <span className="status-dot w-2 h-2 rounded-full bg-accent mr-2"></span>
                <span className="text-accent">InsureAssist is online</span>
            </div>
            <div className="flex space-x-3">
                <Button variant="ghost" size="icon">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"></path>
                    </svg>
                </Button>
                <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
                    <svg id="sun-icon" className="w-5 h-5 hidden dark:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                    <svg id="moon-icon" className="w-5 h-5 block dark:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                    </svg>
                </Button>
                <Button variant="ghost" size="icon">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                    </svg>
                </Button>
            </div>
        </header>
    );
}