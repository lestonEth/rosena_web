import React from 'react';
import { useUI } from '../../context/UIContext';

export default function MobileNavToggle() {
    const { toggleMobileMenu, isMobileMenuOpen } = useUI();

    return (
        <button
            onClick={toggleMobileMenu}
            className={`md:hidden fixed top-4 right-4 z-50 bg-accent text-white p-2 rounded-md mobile-nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </button>
    );
}