import React from 'react';

const Wallet: React.FC = () => {
    return (
        <>
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">My Wallet</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your funds, premium payments, and claim payouts.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-neutral-surface-dark text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm font-medium shadow-sm">
                        <span className="material-icons-outlined text-lg">download</span>
                        Statement
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-neutral-surface-dark text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm font-medium shadow-sm">
                        <span className="material-icons-outlined text-lg">settings</span>
                        Settings
                    </button>
                </div>
            </header>

            {/* Top Section Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
                {/* Balance Card */}
                <div className="lg:col-span-2 relative overflow-hidden rounded-xl bg-gradient-to-br from-background-dark to-slate-900 shadow-xl dark:shadow-2xl dark:shadow-primary/5 p-8 text-white group">
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-slate-300 text-sm font-medium tracking-wide uppercase opacity-80">Total Balance</p>
                                <div className="flex items-baseline gap-1 mt-2">
                                    <span className="text-4xl lg:text-5xl font-bold tracking-tight text-white">₦450,000</span>
                                    <span className="text-2xl text-slate-300 font-medium">.00</span>
                                </div>
                                <p className="mt-2 text-primary text-sm font-medium flex items-center gap-1">
                                    <span className="material-icons-outlined text-sm">trending_up</span>
                                    +₦12,500 from last claim
                                </p>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10">
                                <span className="material-icons-outlined text-primary text-2xl">account_balance</span>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap gap-4">
                            <button className="bg-primary hover:bg-primary-dark text-background-dark font-bold py-3 px-6 rounded-lg transition-all transform active:scale-95 flex items-center gap-2 shadow-lg shadow-primary/20">
                                <span className="material-icons-outlined">payments</span>
                                Withdraw to Bank
                            </button>
                            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg backdrop-blur-sm transition-colors border border-white/10 flex items-center gap-2">
                                <span className="material-icons-outlined">add_card</span>
                                Pay Premium
                            </button>
                        </div>
                    </div>
                </div>

                {/* Linked Account Card */}
                <div className="bg-white dark:bg-neutral-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 flex flex-col justify-between h-full">
                    <div>
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Linked Method</h3>
                            <button className="text-primary hover:text-primary-dark text-sm font-medium transition-colors">Change</button>
                        </div>
                        <div className="relative p-5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-600 group hover:border-primary/50 transition-colors cursor-pointer">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-full flex items-center justify-center shadow-sm p-2">
                                    <img alt="Mastercard" className="w-full h-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMB2o6vyrlEpyNFSlKxECE-WOXsEwhw7CqLaGeylrsZDIbu2bhHAkhNeH2GZah2KfwTPp-oCvLRAamLaEgcNVYl6qxbEEPZRTYYaE1-sB6K2aBeMmuoKpAsHnxymDuhID9CpZRmAVmtY8iVBQurxcsM92tn4Mh-PYHI-zw5zvwDZ6ASw5_sUbSxLbMLZ2gDugFtXBzxtUq8s3rwKFJU2BRYm42DuHy4JPwdYJfC8vKZzC8rAkx72gDJ1W7hGnWZVPkO8OvUuDhZHRd" />
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold text-slate-900 dark:text-white">Access Bank</p>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 font-mono mt-0.5">•••• 4590</p>
                                </div>
                                <span className="material-icons-outlined text-green-500 text-xl">check_circle</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 flex gap-3">
                            <span className="material-icons-outlined text-blue-500 text-xl shrink-0">info</span>
                            <p className="text-xs text-blue-700 dark:text-blue-200 leading-relaxed">
                                Withdrawals to Access Bank typically process within <span className="font-semibold">24 hours</span>. Premium auto-renewal is enabled.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Transactions Section */}
            <div className="bg-white dark:bg-neutral-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                {/* Table Header / Filters */}
                <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">Transaction History</h3>
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
                            <input className="pl-10 pr-4 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none text-slate-700 dark:text-slate-200 placeholder-slate-400 w-full sm:w-64" placeholder="Search transactions..." type="text" />
                        </div>
                        <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors">
                            <span className="material-icons-outlined">filter_list</span>
                        </button>
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                                <th className="px-6 py-4">Transaction</th>
                                <th className="px-6 py-4">Category</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4 text-center">Status</th>
                                <th className="px-6 py-4 text-right">Amount</th>
                                <th className="px-6 py-4"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                            {/* Row 1: Claim Payout */}
                            <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                                            <span className="material-icons-outlined text-xl">medical_services</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-900 dark:text-white">Hospital Cash Payout</p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">Ref: CLM-2023-8921</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                                        Insurance Claim
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                                    Oct 24, 2023 <br />
                                    <span className="text-xs text-slate-400">10:42 AM</span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-100 dark:border-green-800/30">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                        Completed
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <p className="font-bold text-primary dark:text-primary">+₦12,500.00</p>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="material-icons-outlined">more_vert</span>
                                    </button>
                                </td>
                            </tr>
                            {/* Row 2: Premium Payment */}
                            <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                                            <span className="material-icons-outlined text-xl">shield</span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-slate-900 dark:text-white">Annual Premium</p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">Bronze Health Plan</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                                        Payment
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                                    Oct 01, 2023 <br />
                                    <span className="text-xs text-slate-400">09:15 AM</span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-100 dark:border-green-800/30">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                        Success
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <p className="font-bold text-slate-900 dark:text-white">-₦36,000.00</p>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="material-icons-outlined">more_vert</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Wallet;
