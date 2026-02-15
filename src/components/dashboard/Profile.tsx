import React from 'react';

const Profile: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Breadcrumb & Header */}
            <div className="mb-8">
                <nav aria-label="Breadcrumb" className="flex mb-3">
                    <ol className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <li><a href="/dashboard" className="hover:text-primary transition-colors">Dashboard</a></li>
                        <li><span className="material-icons-round text-base mx-1">chevron_right</span></li>
                        <li className="font-medium text-primary">My Profile</li>
                    </ol>
                </nav>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Profile Settings</h1>
                <p className="mt-1 text-gray-500 dark:text-gray-400">Manage your personal information and beneficiary allocations.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Sidebar: Profile Identity */}
                <div className="lg:col-span-4 space-y-6">
                    {/* Identity Card */}
                    <div className="bg-surface-light dark:bg-neutral-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-primary/10 p-6 flex flex-col items-center text-center relative overflow-hidden">
                        {/* Background Pattern Decoration */}
                        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-transparent"></div>
                        <div className="relative mt-4 mb-4">
                            <div className="p-1 bg-white dark:bg-neutral-surface-dark rounded-full shadow-sm">
                                <img alt="User profile" className="w-32 h-32 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmexxI6tHUIAZDvClkkJXYPvqcV9g5EGUAlNGmL-qREFvPbK10zPh-6kmKMWsvo-PVSBBrz7Xhp85NelSn-fGfB-fQcPfxWn0BYhd5gOmlV03EM9vVmdPZuKpySyxZZvbQdxaO4rHxlqq3AK6hwzQjUcDJKkLWMS5-F9ogmc6DhNYN-R2c7yceyag2galheYGH17z7TgRwcMKZLr8U11su9PbJCfPtdstTb4T6rAIa-cg_fx178TUPxRCflF4_9r1mhAod5wFOoE_O" />
                            </div>
                            <button className="absolute bottom-1 right-1 p-2 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-colors" title="Change Photo">
                                <span className="material-icons-round text-lg">photo_camera</span>
                            </button>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Ruben Israel</h2>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">FGI Member ID: <span className="font-mono text-gray-700 dark:text-gray-300">8829-1029-FGI</span></p>
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                            <span className="material-icons-round text-base mr-1.5">verified_user</span>
                            KYC Verified
                        </div>
                        <div className="w-full mt-6 pt-6 border-t border-gray-100 dark:border-primary/10 grid grid-cols-2 gap-4">
                            <div className="text-center">
                                <span className="block text-2xl font-bold text-gray-900 dark:text-white">Active</span>
                                <span className="text-xs text-gray-500 uppercase tracking-wider">Policy Status</span>
                            </div>
                            <div className="text-center border-l border-gray-100 dark:border-primary/10">
                                <span className="block text-2xl font-bold text-gray-900 dark:text-white">Gold</span>
                                <span className="text-xs text-gray-500 uppercase tracking-wider">Plan Tier</span>
                            </div>
                        </div>
                    </div>

                    {/* Support Card */}
                    <div className="bg-primary bg-opacity-90 rounded-xl p-6 text-white relative overflow-hidden group">
                        <div className="absolute -right-6 -bottom-6 text-white opacity-10 transform rotate-12 group-hover:scale-110 transition-transform duration-500">
                            <span className="material-icons-round" style={{ fontSize: '140px' }}>support_agent</span>
                        </div>
                        <h3 className="font-bold text-lg mb-2 relative z-10">Need Assistance?</h3>
                        <p className="text-primary-light text-sm mb-4 relative z-10">Our agents are available 24/7 to help you update your profile or claims.</p>
                        <button className="bg-white text-primary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors relative z-10 w-full">
                            Contact Support
                        </button>
                    </div>
                </div>

                {/* Right Column: Details & Beneficiaries */}
                <div className="lg:col-span-8 space-y-8">
                    {/* Personal Information Section */}
                    <section className="bg-surface-light dark:bg-neutral-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-primary/10 p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                <span className="material-icons-round text-primary">person</span>
                                Personal Information
                            </h3>
                            <button className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
                                Edit Details
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Full Name</label>
                                <input className="w-full bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-primary/20 rounded-lg px-4 py-2.5 text-gray-700 dark:text-gray-200 focus:ring-primary focus:border-primary disabled:opacity-75 disabled:cursor-not-allowed" disabled type="text" defaultValue="Ruben Israel" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email Address</label>
                                <div className="relative">
                                    <span className="material-icons-round absolute left-3 top-3 text-gray-400 text-lg">mail</span>
                                    <input className="w-full bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-primary/20 rounded-lg pl-10 pr-4 py-2.5 text-gray-700 dark:text-gray-200 disabled:opacity-75 disabled:cursor-not-allowed" disabled type="email" defaultValue="ruben.israel@example.com" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Phone Number</label>
                                <div className="relative">
                                    <span className="material-icons-round absolute left-3 top-3 text-gray-400 text-lg">phone</span>
                                    <input className="w-full bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-primary/20 rounded-lg pl-10 pr-4 py-2.5 text-gray-700 dark:text-gray-200 disabled:opacity-75 disabled:cursor-not-allowed" disabled type="tel" defaultValue="+234 801 234 5678" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Date of Birth</label>
                                <input className="w-full bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-primary/20 rounded-lg px-4 py-2.5 text-gray-700 dark:text-gray-200 disabled:opacity-75 disabled:cursor-not-allowed" disabled type="text" defaultValue="12 September, 1985" />
                            </div>
                        </div>
                    </section>

                    {/* Location Details Section */}
                    <section className="bg-surface-light dark:bg-neutral-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-primary/10 p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                <span className="material-icons-round text-primary">location_on</span>
                                Location Details
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">State of Residence</label>
                                <select className="w-full bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-primary/20 rounded-lg px-4 py-2.5 text-gray-700 dark:text-gray-200 disabled:opacity-75 disabled:cursor-not-allowed appearance-none" disabled defaultValue="Lagos State">
                                    <option>Lagos State</option>
                                </select>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Local Govt. Area (LGA)</label>
                                <select className="w-full bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-primary/20 rounded-lg px-4 py-2.5 text-gray-700 dark:text-gray-200 disabled:opacity-75 disabled:cursor-not-allowed appearance-none" disabled defaultValue="Ikeja">
                                    <option>Ikeja</option>
                                </select>
                            </div>
                        </div>
                    </section>

                    {/* Beneficiaries Section */}
                    <section className="bg-surface-light dark:bg-neutral-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-primary/10 p-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                    <span className="material-icons-round text-primary">family_restroom</span>
                                    Beneficiaries
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Allocation for Life & End-of-Life support plan.</p>
                            </div>
                            <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-md shadow-primary/20">
                                <span className="material-icons-round text-lg">add</span>
                                Add Beneficiary
                            </button>
                        </div>

                        {/* Allocation Progress Bar */}
                        <div className="mb-8 bg-gray-50 dark:bg-background-dark p-4 rounded-xl border border-gray-100 dark:border-primary/10">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Total Allocation</span>
                                <span className="text-sm font-bold text-primary">100%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden flex">
                                <div className="bg-primary h-3" style={{ width: '50%' }} title="Chioma Adebayo (50%)"></div>
                                <div className="bg-primary/70 h-3" style={{ width: '25%' }} title="Tunde Adebayo (25%)"></div>
                                <div className="bg-primary/40 h-3" style={{ width: '25%' }} title="Kemi Adebayo (25%)"></div>
                            </div>
                            <div className="flex gap-4 mt-3 text-xs">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    <span className="text-gray-600 dark:text-gray-400">Spouse (50%)</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-primary/70"></div>
                                    <span className="text-gray-600 dark:text-gray-400">Children (50%)</span>
                                </div>
                            </div>
                        </div>

                        {/* Beneficiary List */}
                        <div className="space-y-4">
                            {/* Item 1 */}
                            <div className="flex flex-col sm:flex-row items-center p-4 border border-gray-100 dark:border-primary/10 rounded-lg hover:shadow-md transition-shadow bg-white dark:bg-background-dark/50">
                                <div className="flex items-center gap-4 flex-1 w-full sm:w-auto">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">CA</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">Chioma Adebayo</h4>
                                        <p className="text-xs text-gray-500">Relationship: <span className="text-gray-700 dark:text-gray-300 font-medium">Wife</span></p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between w-full sm:w-auto mt-4 sm:mt-0 gap-6 border-t sm:border-t-0 sm:border-l border-gray-100 dark:border-primary/10 pt-3 sm:pt-0 sm:pl-6">
                                    <div className="text-center sm:text-right">
                                        <span className="block text-xs text-gray-500 uppercase tracking-wide mb-1">Allocation</span>
                                        <span className="block text-xl font-bold text-primary">50%</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="p-2 text-gray-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
                                            <span className="material-icons-round">edit</span>
                                        </button>
                                        <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                                            <span className="material-icons-round">delete</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Item 2 */}
                            <div className="flex flex-col sm:flex-row items-center p-4 border border-gray-100 dark:border-primary/10 rounded-lg hover:shadow-md transition-shadow bg-white dark:bg-background-dark/50">
                                <div className="flex items-center gap-4 flex-1 w-full sm:w-auto">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">TA</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">Tunde Adebayo</h4>
                                        <p className="text-xs text-gray-500">Relationship: <span className="text-gray-700 dark:text-gray-300 font-medium">Son</span></p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between w-full sm:w-auto mt-4 sm:mt-0 gap-6 border-t sm:border-t-0 sm:border-l border-gray-100 dark:border-primary/10 pt-3 sm:pt-0 sm:pl-6">
                                    <div className="text-center sm:text-right">
                                        <span className="block text-xs text-gray-500 uppercase tracking-wide mb-1">Allocation</span>
                                        <span className="block text-xl font-bold text-primary">25%</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="p-2 text-gray-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
                                            <span className="material-icons-round">edit</span>
                                        </button>
                                        <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                                            <span className="material-icons-round">delete</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Item 3 */}
                            <div className="flex flex-col sm:flex-row items-center p-4 border border-gray-100 dark:border-primary/10 rounded-lg hover:shadow-md transition-shadow bg-white dark:bg-background-dark/50">
                                <div className="flex items-center gap-4 flex-1 w-full sm:w-auto">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">KA</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">Kemi Adebayo</h4>
                                        <p className="text-xs text-gray-500">Relationship: <span className="text-gray-700 dark:text-gray-300 font-medium">Daughter</span></p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between w-full sm:w-auto mt-4 sm:mt-0 gap-6 border-t sm:border-t-0 sm:border-l border-gray-100 dark:border-primary/10 pt-3 sm:pt-0 sm:pl-6">
                                    <div className="text-center sm:text-right">
                                        <span className="block text-xs text-gray-500 uppercase tracking-wide mb-1">Allocation</span>
                                        <span className="block text-xl font-bold text-primary">25%</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <button className="p-2 text-gray-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
                                            <span className="material-icons-round">edit</span>
                                        </button>
                                        <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                                            <span className="material-icons-round">delete</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Action Bar */}
                    <div className="flex flex-col sm:flex-row justify-end gap-4 pt-4 border-t border-gray-200 dark:border-primary/20">
                        <button className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-50 dark:hover:bg-neutral-surface-dark transition-colors">
                            Cancel Changes
                        </button>
                        <button className="px-6 py-3 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2">
                            <span className="material-icons-round">save</span>
                            Save All Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
