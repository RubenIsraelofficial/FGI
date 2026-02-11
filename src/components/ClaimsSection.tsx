
const ClaimsSection = () => {
    return (
        <section className="py-24 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Fast Claims</h2>
                    <p className="mt-4 text-slate-600 dark:text-slate-400">From submission to bank credit in record time.</p>
                </div>
                <div className="relative">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 -translate-y-1/2 z-0"></div>
                    <div className="hidden md:block absolute top-1/2 left-0 w-2/3 h-1 bg-primary -translate-y-1/2 z-0 transition-all duration-1000"></div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-background-dark mb-4">
                                <span className="material-icons-outlined text-2xl">upload_file</span>
                            </div>
                            <h4 className="font-bold text-lg mb-1">Submission</h4>
                            <p className="text-sm text-slate-500">Upload documents via app</p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-background-dark mb-4">
                                <span className="material-icons-outlined text-2xl">smart_toy</span>
                            </div>
                            <h4 className="font-bold text-lg mb-1">AI Review</h4>
                            <p className="text-sm text-slate-500">Instant verification</p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-background-dark mb-4">
                                <span className="material-icons-outlined text-2xl">check_circle</span>
                            </div>
                            <h4 className="font-bold text-lg mb-1">Approval</h4>
                            <p className="text-sm text-slate-500">Confirmed in minutes</p>
                        </div>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-white dark:bg-gray-800 text-gray-400 border-2 border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center shadow-lg mb-4">
                                <span className="material-icons-outlined text-2xl">account_balance</span>
                            </div>
                            <h4 className="font-bold text-lg mb-1 text-gray-400">Bank Payout</h4>
                            <p className="text-sm text-slate-500">Credited to account</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClaimsSection;
