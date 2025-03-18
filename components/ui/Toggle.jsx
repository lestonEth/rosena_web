import React from 'react';

export default function Toggle({ checked, onChange, label, description }) {
    return (
        <div className="flex items-center justify-between">
            <div>
                <p className="font-medium">{label}</p>
                {description && <p className="text-sm text-gray-400">{description}</p>}
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={checked}
                    onChange={onChange}
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent"></div>
            </label>
        </div>
    );
}