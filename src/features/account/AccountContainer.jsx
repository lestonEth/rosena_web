import React from 'react';

export default function AccountContainer() {
    return (
        <div className="flex-1 flex flex-col overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6">
            <h2 className="text-3xl font-bold mb-8 text-blue-400 border-b border-gray-700 pb-4">My Account</h2>

            {/* Profile section */}
            <div className="bg-gray-800/70 rounded-xl p-6 mb-8 shadow-lg backdrop-blur-sm">
                <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
                    <div className="bg-blue-500/20 rounded-full p-3 mb-4 md:mb-0 md:mr-6">
                        <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z">
                            </path>
                        </svg>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold">John Doe</h3>
                        <p className="text-gray-400 text-lg">Policy #: ABC123456789</p>
                    </div>
                    <button
                        className="mt-4 md:mt-0 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 px-6 py-3 rounded-lg transition-all duration-300 font-medium hover:shadow-blue-500/20 hover:shadow-md">
                        Edit Profile
                    </button>
                </div>

                <div className="border-t border-gray-700 pt-6 mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-900/40 p-4 rounded-lg">
                            <p className="text-gray-400 text-sm mb-1">Email Address</p>
                            <p className="text-lg">john.doe@example.com</p>
                        </div>
                        <div className="bg-gray-900/40 p-4 rounded-lg">
                            <p className="text-gray-400 text-sm mb-1">Phone Number</p>
                            <p className="text-lg">(555) 123-4567</p>
                        </div>
                        <div className="bg-gray-900/40 p-4 rounded-lg">
                            <p className="text-gray-400 text-sm mb-1">Home Address</p>
                            <p className="text-lg">123 Insurance Ave, Cityville, ST 12345</p>
                        </div>
                        <div className="bg-gray-900/40 p-4 rounded-lg">
                            <p className="text-gray-400 text-sm mb-1">Next Payment Due</p>
                            <p className="text-lg font-medium text-blue-300">October 15, 2023 - $145.50</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Policy information */}
            <div className="bg-gray-800/70 rounded-xl p-6 mb-8 shadow-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <svg className="w-6 h-6 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                        </path>
                    </svg>
                    Policy Information
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Policy Details */}
                    <div className="bg-gray-900/30 p-6 rounded-lg">
                        <h4 className="font-medium mb-4 text-blue-300">Policy Details</h4>
                        <div className="space-y-5">
                            <div>
                                <p className="text-gray-400 text-sm mb-1">Policy Type</p>
                                <p className="text-lg">Auto Insurance - Comprehensive</p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm mb-1">Policy Term</p>
                                <p className="text-lg">Apr 15, 2023 - Apr 15, 2024</p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm mb-1">Premium</p>
                                <p className="text-lg font-medium text-blue-300">$145.50 / month</p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm mb-1">Deductible</p>
                                <p className="text-lg">$500 Collision, $250 Comprehensive</p>
                            </div>
                        </div>

                        <button
                            className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-blue-500/20">
                            View Full Policy
                        </button>
                    </div>

                    {/* Insured Vehicles */}
                    <div className="bg-gray-900/30 p-6 rounded-lg">
                        <h4 className="font-medium mb-4 text-blue-300 flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4">
                                </path>
                            </svg>
                            Insured Vehicles
                        </h4>

                        <div className="space-y-4">
                            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-blue-400/40 transition-all">
                                <div className="flex justify-between">
                                    <div>
                                        <p className="font-medium text-lg">2019 Toyota Camry</p>
                                        <p className="text-sm text-gray-400">VIN: 1HGCM82633A123456</p>
                                    </div>
                                    <button className="text-blue-400 hover:text-blue-300 transition-colors">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-blue-400/40 transition-all">
                                <div className="flex justify-between">
                                    <div>
                                        <p className="font-medium text-lg">2017 Honda CR-V</p>
                                        <p className="text-sm text-gray-400">VIN: 5FNRL6H58KB123456</p>
                                    </div>
                                    <button className="text-blue-400 hover:text-blue-300 transition-colors">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <button
                                className="w-full py-3 mt-2 text-center border border-blue-500/50 text-blue-400 rounded-lg hover:bg-blue-500/10 transition-all duration-300 font-medium">
                                + Add Vehicle
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Claims */}
            <div className="bg-gray-800/70 rounded-xl p-6 mb-8 shadow-lg backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold flex items-center">
                        <svg className="w-6 h-6 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2">
                            </path>
                        </svg>
                        Recent Claims
                    </h3>
                    <a href="#" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors font-medium">
                        View All Claims
                    </a>
                </div>

                <div className="overflow-x-auto bg-gray-900/30 rounded-lg">
                    <table className="min-w-full">
                        <thead>
                            <tr className="border-b border-gray-700 text-gray-400">
                                <th className="p-4 text-left">Claim ID</th>
                                <th className="p-4 text-left">Date</th>
                                <th className="p-4 text-left">Type</th>
                                <th className="p-4 text-left">Status</th>
                                <th className="p-4 text-left">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-gray-700 hover:bg-gray-800/40 transition-colors">
                                <td className="p-4 font-medium">CL-0078532</td>
                                <td className="p-4">Sep 12, 2023</td>
                                <td className="p-4">Collision</td>
                                <td className="p-4">
                                    <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium">
                                        In Progress
                                    </span>
                                </td>
                                <td className="p-4 font-medium">$2,450.00</td>
                            </tr>
                            <tr className="border-b border-gray-700 hover:bg-gray-800/40 transition-colors">
                                <td className="p-4 font-medium">CL-0073219</td>
                                <td className="p-4">Jun 24, 2023</td>
                                <td className="p-4">Comprehensive</td>
                                <td className="p-4">
                                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                                        Approved
                                    </span>
                                </td>
                                <td className="p-4 font-medium">$780.25</td>
                            </tr>
                            <tr className="hover:bg-gray-800/40 transition-colors">
                                <td className="p-4 font-medium">CL-0069427</td>
                                <td className="p-4">Mar 03, 2023</td>
                                <td className="p-4">Windshield</td>
                                <td className="p-4">
                                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                                        Approved
                                    </span>
                                </td>
                                <td className="p-4 font-medium">$320.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Documents and Preferences */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Documents */}
                <div className="bg-gray-800/70 rounded-xl p-6 shadow-lg backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-6 flex items-center">
                        <svg className="w-6 h-6 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2">
                            </path>
                        </svg>
                        Documents
                    </h3>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-900/40 rounded-lg hover:bg-gray-900/60 transition-all cursor-pointer group">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z">
                                    </path>
                                </svg>
                                <span className="font-medium">Policy Document</span>
                            </div>
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                            </svg>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-gray-900/40 rounded-lg hover:bg-gray-900/60 transition-all cursor-pointer group">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z">
                                    </path>
                                </svg>
                                <span className="font-medium">Insurance Cards</span>
                            </div>
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                            </svg>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-gray-900/40 rounded-lg hover:bg-gray-900/60 transition-all cursor-pointer group">
                            <div className="flex items-center">
                                <svg className="w-6 h-6 mr-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z">
                                    </path>
                                </svg>
                                <span className="font-medium">Billing Statements</span>
                            </div>
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Preferences */}
                <div className="bg-gray-800/70 rounded-xl p-6 shadow-lg backdrop-blur-sm">
                    <h3 className="text-xl font-semibold mb-6 flex items-center">
                        <svg className="w-6 h-6 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">
                            </path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        Preferences
                    </h3>

                    <div className="space-y-5">
                        <div className="flex items-center justify-between p-4 bg-gray-900/40 rounded-lg">
                            <div>
                                <p className="font-medium">Email Notifications</p>
                                <p className="text-sm text-gray-400">Receive updates via email</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div
                                    className="w-12 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500">
                                </div>
                            </label>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-gray-900/40 rounded-lg">
                            <div>
                                <p className="font-medium">SMS Alerts</p>
                                <p className="text-sm text-gray-400">Receive text message alerts</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div
                                    className="w-12 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500">
                                </div>
                            </label>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-gray-900/40 rounded-lg">
                            <div>
                                <p className="font-medium">Paperless Billing</p>
                                <p className="text-sm text-gray-400">Receive billing statements online</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div
                                    className="w-12 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500">
                                </div>
                            </label>
                        </div>

                        <div className="flex items-center justify-between p-4 bg-gray-900/40 rounded-lg">
                            <div>
                                <p className="font-medium">Marketing Communications</p>
                                <p className="text-sm text-gray-400">Receive offers and promotions</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div
                                    className="w-12 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500">
                                </div>
                            </label>
                        </div>
                    </div>

                    <button
                        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 w-full font-medium shadow-lg hover:shadow-blue-500/20">
                        Save Preferences
                    </button>
                </div>
            </div>
        </div>
    );
}