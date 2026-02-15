import React from 'react';

const Settings: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Sidebar Menu */}
                <aside className="lg:col-span-3 space-y-8">
                    <div>
                        <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 px-3">Account</h2>
                        <nav className="space-y-1">
                            <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg bg-primary/10 text-primary dark:bg-primary/20 dark:text-white group transition-all">
                                <span className="material-icons text-xl mr-3">manage_accounts</span>
                                General
                            </a>
                            <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-neutral-surface-dark dark:hover:text-white group transition-all">
                                <span className="material-icons text-xl mr-3 text-gray-400 group-hover:text-gray-500">lock</span>
                                Security
                            </a>
                            <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-neutral-surface-dark dark:hover:text-white group transition-all">
                                <span className="material-icons text-xl mr-3 text-gray-400 group-hover:text-gray-500">notifications</span>
                                Notifications
                            </a>
                            <a href="#" className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-neutral-surface-dark dark:hover:text-white group transition-all">
                                <span className="material-icons text-xl mr-3 text-gray-400 group-hover:text-gray-500">credit_card</span>
                                Billing
                            </a>
                        </nav>
                    </div>
                </aside>

                {/* Settings Content */}
                <div className="lg:col-span-9 space-y-8">
                    {/* Header Mobile Only */}
                    <div className="lg:hidden mb-6">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Account Settings</h1>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">Manage your profile, security, and preferences.</p>
                    </div>

                    {/* Profile Section */}
                    <section className="bg-surface-light dark:bg-neutral-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                        <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                            <div className="relative">
                                <img alt="Profile" className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-neutral-surface-dark shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLnJ9qCT9IqdXl5vJ9Uj04fCSkeRlDSs-akiWZcREpySRJFos7xd9osTJo0EYWDweYIGdvcNI7VFuC17cHRSUBKcHGG_8a-QRvbACzYyrynw_Zk0effl7WzeUGTpKMR9EdeK8BbK8u96fmOx9V4TGi3dkdRs7jJo6j_T9mgvozukhQw2eJYJgH-t5wFFcWiWkXvLxZlUNC91-1AAoDbUZha4PtabJscr2fCGfloMi9Ystul-XORQ8p3ybLI_SzKk_PWpTk9xNd0PpY" />
                                <button className="absolute bottom-0 right-0 bg-primary hover:bg-primary-hover text-white p-2 rounded-full shadow-lg transition-transform hover:scale-105 border-2 border-white dark:border-neutral-surface-dark">
                                    <span className="material-icons text-sm">edit</span>
                                </button>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Ruben Israel</h2>
                                <p className="text-gray-500 dark:text-gray-400 mb-4">ruben.israel@example.com • +234 801 234 5678</p>
                                <div className="flex flex-wrap gap-3">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-100">
                                        Policy Active
                                    </span>
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                                        Member since 2019
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 dark:bg-gray-800/50 px-6 py-4 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
                            <span className="text-sm text-gray-500 dark:text-gray-400">Profile 85% complete</span>
                            <button className="text-sm font-semibold text-primary hover:text-primary-hover">Edit Profile</button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Settings;
