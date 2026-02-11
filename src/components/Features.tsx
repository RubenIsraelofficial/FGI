
const Features = () => {
    return (
        <section className="py-20 bg-white dark:bg-surface-dark relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Complete Coverage. <span className="text-primary">No Compromises.</span></h2>
                    <p className="text-slate-600 dark:text-slate-400">Our flagship FGI plan covers the four pillars of a secure life in Nigeria.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="group p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-transparent hover:border-primary/20 hover:shadow-soft transition-all duration-300">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <span className="material-icons-outlined text-3xl">favorite</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Life Protection</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">Secure your family's future with up to ₦1,000,000 coverage for beneficiaries in case of the unexpected.</p>
                        <a className="inline-flex items-center text-primary font-semibold text-sm hover:gap-2 transition-all" href="#">Learn more <span className="material-icons-outlined text-sm ml-1">arrow_forward</span></a>
                    </div>
                    <div className="group p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-transparent hover:border-primary/20 hover:shadow-soft transition-all duration-300">
                        <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <span className="material-icons-outlined text-3xl">medical_services</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Health Support</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">Daily hospital cash payout to cover incidental expenses while you recover. Don't let illness drain your wallet.</p>
                        <a className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm hover:gap-2 transition-all" href="#">Learn more <span className="material-icons-outlined text-sm ml-1">arrow_forward</span></a>
                    </div>
                    <div className="group p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-transparent hover:border-primary/20 hover:shadow-soft transition-all duration-300">
                        <div className="w-14 h-14 rounded-xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <span className="material-icons-outlined text-3xl">agriculture</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Farm and Livelihood Protection</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">Daily and emergency income relief specifically designed for farmers and business owners to keep your livelihood secure.</p>
                        <a className="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold text-sm hover:gap-2 transition-all" href="#">Learn more <span className="material-icons-outlined text-sm ml-1">arrow_forward</span></a>
                    </div>
                    <div className="group p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-transparent hover:border-primary/20 hover:shadow-soft transition-all duration-300">
                        <div className="w-14 h-14 rounded-xl bg-gold/10 text-gold-600 dark:text-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <span className="material-icons-outlined text-3xl">volunteer_activism</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Life and End of Life Support</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4">Comprehensive death cover, disability insurance, and family financial protection when it matters most.</p>
                        <a className="inline-flex items-center text-gold-600 dark:text-gold font-semibold text-sm hover:gap-2 transition-all" href="#">Learn more <span className="material-icons-outlined text-sm ml-1">arrow_forward</span></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
