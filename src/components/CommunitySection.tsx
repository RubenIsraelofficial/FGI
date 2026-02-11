
const CommunitySection = () => {
    return (
        <section className="py-20 bg-white dark:bg-surface-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-br from-gold-light to-white dark:from-surface-dark dark:to-background-dark rounded-3xl p-8 lg:p-16 relative overflow-hidden shadow-card">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">More Than Just Insurance. <br /><span className="text-gold-600 dark:text-gold">We Care About Your Future.</span></h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
                                FGI is committed to community welfare. Our plan includes access to food banks and support resources, ensuring that setbacks don't stop your progress.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-3 bg-white dark:bg-surface-dark px-4 py-3 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                                    <span className="material-icons-outlined text-gold">restaurant</span>
                                    <span className="font-semibold text-sm">Food Bank Access</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img alt="Two Nigerian students studying together in a classroom setting" className="rounded-2xl shadow-lg w-full h-80 object-cover" data-alt="Students studying together" src="/assets/community-students.jpg.png" />
                            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl max-w-xs">
                                <div className="flex items-center gap-3">
                                    <div className="bg-gold/20 p-2 rounded-full text-gold-700 dark:text-gold">
                                        <span className="material-icons-outlined">volunteer_activism</span>
                                    </div>
                                    <p className="text-sm font-medium italic">"The food support helped me focus on my finals without worry."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommunitySection;
