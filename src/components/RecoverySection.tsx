
const RecoverySection = () => {
    return (
        <section className="py-20 bg-background-light dark:bg-background-dark overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 order-2 lg:order-1 relative">
                        <div className="relative max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-2xl border-8 border-slate-900 p-4">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-slate-900 rounded-b-xl z-20"></div>
                            <div className="h-[500px] w-full bg-slate-50 dark:bg-gray-900 rounded-[1.5rem] overflow-hidden relative">
                                <div className="pt-12 px-6">
                                    <div className="flex justify-between items-center mb-8">
                                        <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                                        <div className="w-20 h-4 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                                    </div>
                                    <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 mb-6">
                                        <p className="text-xs text-slate-500 mb-1">Total Payout Balance</p>
                                        <h3 className="text-2xl font-bold text-primary">₦45,000.00</h3>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute -left-2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                                        <div className="ml-4 space-y-4">
                                            <div className="bg-white dark:bg-surface-dark p-4 rounded-xl shadow-md border-l-4 border-green-500 transform transition-all hover:scale-105 cursor-default">
                                                <div className="flex justify-between items-start">
                                                    <div className="flex gap-3">
                                                        <div className="bg-green-100 p-1.5 rounded-full text-green-600 h-fit">
                                                            <span className="material-icons-outlined text-sm">account_balance_wallet</span>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-bold text-slate-900 dark:text-white">Credit Alert</p>
                                                            <p className="text-xs text-slate-500">Hospital Cash Daily Payout</p>
                                                        </div>
                                                    </div>
                                                    <span className="text-sm font-bold text-primary">+₦3,000</span>
                                                </div>
                                            </div>
                                            <div className="bg-white dark:bg-surface-dark p-4 rounded-xl shadow-sm opacity-60">
                                                <div className="flex justify-between items-start">
                                                    <div className="flex gap-3">
                                                        <div className="bg-green-100 p-1.5 rounded-full text-green-600 h-fit">
                                                            <span className="material-icons-outlined text-sm">account_balance_wallet</span>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm font-bold text-slate-900 dark:text-white">Credit Alert</p>
                                                            <p className="text-xs text-slate-500">Hospital Cash Daily Payout</p>
                                                        </div>
                                                    </div>
                                                    <span className="text-sm font-bold text-primary">+₦3,000</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-primary/10 blur-3xl rounded-full -z-10"></div>
                    </div>

                    <div className="lg:w-1/2 order-1 lg:order-2">
                        <div className="inline-block px-3 py-1 rounded-full bg-green-100 text-primary text-xs font-bold mb-4 uppercase tracking-wider">Health Benefit</div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6">Get Paid While You Recover.</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                            Admission to the hospital shouldn't mean financial stress. FGI provides a daily ₦3,000 cash allowance for every day you spend hospitalized, credited directly to your wallet.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="material-icons-outlined text-primary mt-1">check_circle</span>
                                <span className="text-slate-700 dark:text-slate-300">Instant notification upon approval</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-icons-outlined text-primary mt-1">check_circle</span>
                                <span className="text-slate-700 dark:text-slate-300">Use for transport, food, or medication</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-icons-outlined text-primary mt-1">check_circle</span>
                                <span className="text-slate-700 dark:text-slate-300">No receipts required for spending</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecoverySection;
