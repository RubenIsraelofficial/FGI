import React from 'react';

const Overview: React.FC = () => {
    return (
        <>
            {/* Welcome Header & Status */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-10">
                <div>
                    <p className="text-slate-500 dark:text-slate-400 mb-1">Thursday, October 24</p>
                    <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">Good Morning, Ruben</h1>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 bg-primary/10 dark:bg-primary/5 px-4 py-2 rounded-full border border-primary/20">
                            <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow"></div>
                            <span className="font-bold text-primary text-sm tracking-wide">ALL SYSTEMS ACTIVE</span>
                        </div>
                        <span className="text-sm text-slate-400 dark:text-slate-500">Last updated 5m ago</span>
                    </div>
                </div>
                <div className="bg-white dark:bg-[#1a2e26] p-6 rounded-xl shadow-sm border border-slate-100 dark:border-white/5 w-full lg:w-auto min-w-[300px]">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Wallet Balance</span>
                        <button className="text-primary hover:text-primary/80 text-sm font-semibold flex items-center gap-1">
                            <span className="material-icons-round text-base">add_circle</span> Add Funds
                        </button>
                    </div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-baseline gap-1">
                        $12,450<span className="text-xl text-slate-400 dark:text-slate-500 font-medium">.00</span>
                    </div>
                    <div className="mt-3 h-1 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-3/4 rounded-full"></div>
                    </div>
                    <p className="text-xs text-slate-400 mt-2">Next auto-debit: $450 on Nov 01</p>
                </div>
            </div>

            {/* Modular Cards Grid */}
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
                <span className="material-icons-round text-primary">grid_view</span> Your Portfolio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {/* Card 1: Life & End-of-Life */}
                <div className="group bg-white dark:bg-[#1a2e26] rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="material-icons-round text-6xl text-primary">favorite</span>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-pink-100 dark:bg-pink-900/30 text-pink-500 dark:text-pink-300 flex items-center justify-center mb-4">
                        <span className="material-icons-round text-2xl">volunteer_activism</span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">Life & End-of-Life</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Family Protection Plan</p>
                    <div className="border-t border-slate-100 dark:border-white/5 pt-4 mb-4">
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Coverage</p>
                                <p className="font-bold text-slate-800 dark:text-slate-200">$500,000</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Due</p>
                                <p className="font-medium text-slate-800 dark:text-slate-200 text-sm">Oct 12</p>
                            </div>
                        </div>
                    </div>
                    <button className="w-full py-2 rounded-lg bg-slate-50 dark:bg-white/5 hover:bg-primary/10 dark:hover:bg-primary/20 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-semibold flex justify-between items-center px-4">
                        Details <span className="material-icons-round text-sm">arrow_forward</span>
                    </button>
                </div>
                {/* Card 2: Health + Hospital Cash */}
                <div className="group bg-white dark:bg-[#1a2e26] rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="material-icons-round text-6xl text-primary">medical_services</span>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-500 dark:text-blue-300 flex items-center justify-center mb-4">
                        <span className="material-icons-round text-2xl">health_and_safety</span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">Health + Cash</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Global Comprehensive</p>
                    <div className="border-t border-slate-100 dark:border-white/5 pt-4 mb-4">
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Status</p>
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                                    ACTIVE
                                </span>
                            </div>
                            <div className="text-right">
                                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Network</p>
                                <p className="font-medium text-slate-800 dark:text-slate-200 text-sm">Tier 1</p>
                            </div>
                        </div>
                    </div>
                    <button className="w-full py-2 rounded-lg bg-slate-50 dark:bg-white/5 hover:bg-primary/10 dark:hover:bg-primary/20 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-semibold flex justify-between items-center px-4">
                        Details <span className="material-icons-round text-sm">arrow_forward</span>
                    </button>
                </div>
                {/* Card 3: Farm & Livelihood */}
                <div className="group bg-white dark:bg-[#1a2e26] rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="material-icons-round text-6xl text-primary">agriculture</span>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
                        <span className="material-icons-round text-2xl">agriculture</span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">Farm & Livelihood</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Crop & Asset Shield</p>
                    <div className="border-t border-slate-100 dark:border-white/5 pt-4 mb-4">
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Season</p>
                                <p className="font-bold text-slate-800 dark:text-slate-200">Harvest '24</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Risk</p>
                                <p className="font-medium text-amber-600 dark:text-amber-400 text-sm">Low</p>
                            </div>
                        </div>
                    </div>
                    <button className="w-full py-2 rounded-lg bg-slate-50 dark:bg-white/5 hover:bg-primary/10 dark:hover:bg-primary/20 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-semibold flex justify-between items-center px-4">
                        Details <span className="material-icons-round text-sm">arrow_forward</span>
                    </button>
                </div>
                {/* Card 4: Student Welfare */}
                <div className="group bg-white dark:bg-[#1a2e26] rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="material-icons-round text-6xl text-primary">school</span>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 flex items-center justify-center mb-4">
                        <span className="material-icons-round text-2xl">school</span>
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">Student Welfare</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Education Assurance</p>
                    <div className="border-t border-slate-100 dark:border-white/5 pt-4 mb-4">
                        <div className="flex justify-between items-end">
                            <div>
                                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Beneficiary</p>
                                <p className="font-bold text-slate-800 dark:text-slate-200">Sarah D.</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Term</p>
                                <p className="font-medium text-slate-800 dark:text-slate-200 text-sm">Year 3/4</p>
                            </div>
                        </div>
                    </div>
                    <button className="w-full py-2 rounded-lg bg-slate-50 dark:bg-white/5 hover:bg-primary/10 dark:hover:bg-primary/20 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm font-semibold flex justify-between items-center px-4">
                        Details <span className="material-icons-round text-sm">arrow_forward</span>
                    </button>
                </div>
            </div>

            {/* Bottom Widgets Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Widget 1: Hospital Cash Tracker */}
                <div className="bg-white dark:bg-[#1a2e26] rounded-xl p-6 shadow-sm border border-slate-100 dark:border-white/5 flex flex-col items-center justify-center relative">
                    <div className="absolute top-6 left-6 font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                        <span className="material-icons-round text-primary">analytics</span> Usage Tracker
                    </div>
                    <div className="mt-8 mb-4 relative w-40 h-40">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle className="text-slate-100 dark:text-slate-700" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeWidth="12"></circle>
                            <circle className="text-primary progress-ring__circle" cx="80" cy="80" fill="transparent" r="70" stroke="currentColor" strokeDasharray="440" strokeDashoffset="264" strokeWidth="12"></circle>
                        </svg>
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                            <span className="text-3xl font-bold text-slate-900 dark:text-white">40%</span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">Utilized</span>
                        </div>
                    </div>
                    <div className="text-center">
                        <h4 className="font-bold text-slate-800 dark:text-slate-200">Hospital Cash Benefit</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">4 of 10 Days Claimed this year</p>
                    </div>
                </div>
                {/* Widget 2: Claims Timeline */}
                <div className="col-span-1 lg:col-span-2 bg-white dark:bg-[#1a2e26] rounded-xl p-6 shadow-sm border border-slate-100 dark:border-white/5">
                    <div className="flex justify-between items-center mb-6">
                        <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                            <span className="material-icons-round text-primary">history</span> Recent Activity
                        </div>
                        <button className="text-xs font-semibold text-primary hover:text-primary/80">View All Activity</button>
                    </div>
                    <div className="relative pl-4">
                        {/* Vertical Line */}
                        <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-700"></div>
                        {/* Timeline Item 1 */}
                        <div className="flex gap-4 mb-8 relative">
                            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10 shrink-0 ring-4 ring-white dark:ring-[#1a2e26]">
                                <span className="material-icons-round text-white text-sm">check</span>
                            </div>
                            <div className="flex-grow bg-slate-50 dark:bg-white/5 p-4 rounded-lg">
                                <div className="flex justify-between items-start mb-1">
                                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Claim #4492 Submitted</h4>
                                    <span className="text-xs text-slate-400">Oct 20, 2:30 PM</span>
                                </div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Dental surgery reimbursement request.</p>
                            </div>
                        </div>
                        {/* Timeline Item 2 */}
                        <div className="flex gap-4 mb-8 relative">
                            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center z-10 shrink-0 ring-4 ring-white dark:ring-[#1a2e26] shadow-lg shadow-blue-500/30">
                                <span className="material-icons-round text-white text-sm">sync</span>
                            </div>
                            <div className="flex-grow bg-slate-50 dark:bg-white/5 p-4 rounded-lg border-l-4 border-blue-500">
                                <div className="flex justify-between items-start mb-1">
                                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Under Review</h4>
                                    <span className="text-xs text-blue-500 font-semibold">In Progress</span>
                                </div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Our medical team is verifying the documents.</p>
                                <div className="mt-3 flex gap-2">
                                    <span className="px-2 py-1 bg-white dark:bg-white/10 rounded text-xs text-slate-500 border border-slate-200 dark:border-white/10">Docs Verified</span>
                                    <span className="px-2 py-1 bg-white dark:bg-white/10 rounded text-xs text-slate-500 border border-slate-200 dark:border-white/10">Policy Checked</span>
                                </div>
                            </div>
                        </div>
                        {/* Timeline Item 3 (Future) */}
                        <div className="flex gap-4 relative opacity-60">
                            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center z-10 shrink-0 ring-4 ring-white dark:ring-[#1a2e26]">
                                <span className="material-icons-round text-slate-500 dark:text-slate-400 text-sm">paid</span>
                            </div>
                            <div className="flex-grow p-4 rounded-lg border border-dashed border-slate-300 dark:border-slate-600">
                                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Approval & Disbursement</h4>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Estimated completion by Oct 26.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Overview;
