import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const DashboardLayout: React.FC = () => {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path ? 'bg-primary/10 text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800';
    };

    const iconColor = (path: string) => {
        return location.pathname === path ? 'text-primary-dark dark:text-primary' : 'group-hover:text-primary transition-colors';
    };

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-display antialiased min-h-screen flex transition-colors duration-300">
            {/* Sidebar Navigation */}
            <aside className="w-64 bg-white dark:bg-neutral-surface-dark border-r border-slate-200 dark:border-slate-700 hidden lg:flex flex-col fixed h-full z-20">
                <div className="p-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-background-dark font-bold text-xl">
                        F
                    </div>
                    <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">Fortis Global</span>
                </div>
                <nav className="flex-1 px-4 py-4 space-y-1">
                    <Link to="/dashboard" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group ${isActive('/dashboard')}`}>
                        <span className={`material-icons-outlined ${iconColor('/dashboard')}`}>dashboard</span>
                        <span className="font-medium">Dashboard</span>
                    </Link>
                    <Link to="/dashboard/policies" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group ${isActive('/dashboard/policies')}`}>
                        <span className={`material-icons-outlined ${iconColor('/dashboard/policies')}`}>verified_user</span>
                        <span className="font-medium">My Insurance</span>
                    </Link>
                    <Link to="/dashboard/wallet" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group ${isActive('/dashboard/wallet')}`}>
                        <span className={`material-icons-outlined ${iconColor('/dashboard/wallet')}`}>account_balance_wallet</span>
                        <span className="font-medium">Wallet</span>
                    </Link>
                    <Link to="/dashboard/claims" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group ${isActive('/dashboard/claims')}`}>
                        <span className={`material-icons-outlined ${iconColor('/dashboard/claims')}`}>description</span>
                        <span className="font-medium">Claims</span>
                    </Link>
                    <Link to="/dashboard/support" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group ${isActive('/dashboard/support')}`}>
                        <span className={`material-icons-outlined ${iconColor('/dashboard/support')}`}>support_agent</span>
                        <span className="font-medium">Support</span>
                    </Link>
                    <Link to="/dashboard/profile" className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors group ${isActive('/dashboard/profile')}`}>
                        <span className={`material-icons-outlined ${iconColor('/dashboard/profile')}`}>person</span>
                        <span className="font-medium">Profile</span>
                    </Link>
                </nav>
                <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-3 px-2 py-2">
                        <img alt="User profile" className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-slate-600 shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfp1xzLAVTazxiF5YGJqtw3y4bt2s0ebHAGAyTq-mZCtC87fy-8_dR9hTIhD1UlLd4HnIGVMRE51V_1E_cMFd4PNapQrP0Iz_sU_a1XkCYHdt2d1kV4CLNXtoSIJDbQ-072i5uxxEg2j572fa4mD_3dqFvY0YlFcndxBdlHhpv-lhD4KDqDg1ynJURTQj5szfn6sbtudJtk5M0MKU-k3H6falLX0DexoNKaP-AYYYwqSJVKQFh41AbNqcB865ef3o8ckmgYwYHuoZc" />
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">Ruben Israel</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Policy #FG-9281</p>
                        </div>
                        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                            <span className="material-icons-outlined text-xl">logout</span>
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 lg:ml-64 p-6 lg:p-10 max-w-7xl mx-auto w-full">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
