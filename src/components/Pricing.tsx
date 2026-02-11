
const Pricing = () => {
    return (
        <section className="py-24 bg-white dark:bg-surface-dark relative overflow-hidden" id="pricing">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-md mx-auto">
                    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800 transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="bg-primary p-2 text-center">
                            <span className="text-white text-xs font-bold uppercase tracking-widest">Most Popular Choice</span>
                        </div>
                        <div className="p-8 lg:p-10 text-center">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">The FGI Standard Plan</h3>
                            <p className="text-slate-500 text-sm mb-8">Comprehensive protection for the modern Nigerian.</p>
                            <div className="flex items-center justify-center mb-8">
                                <span className="text-3xl text-slate-400 font-medium align-top mt-2">₦</span>
                                <span className="text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">36,000</span>
                                <span className="text-slate-400 self-end mb-2 ml-1">/ year</span>
                            </div>
                            <ul className="space-y-4 text-left mb-10 px-4">
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="material-icons-outlined text-primary">check_circle</span>
                                    Life Cover (₦1M Beneficiary Payout)
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="material-icons-outlined text-primary">check_circle</span>
                                    ₦3,000 Daily Hospital Cash
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="material-icons-outlined text-primary">check_circle</span>
                                    Farm & Livelihood Protection
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="material-icons-outlined text-primary">check_circle</span>
                                    Life & End of Life Support
                                </li>
                                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                                    <span className="material-icons-outlined text-primary">check_circle</span>
                                    Access to Food Bank
                                </li>
                            </ul>
                            <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-primary/40 transition-all flex items-center justify-center gap-2">
                                Choose This Plan
                                <span className="material-icons-outlined">arrow_forward</span>
                            </button>
                            <p className="mt-4 text-xs text-slate-400">No hidden fees. Cancel anytime.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
