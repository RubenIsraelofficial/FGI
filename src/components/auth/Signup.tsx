import React from 'react';
import { Link } from 'react-router-dom';

const Signup: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-12 antialiased selection:bg-primary/30 gap-12">
            <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white dark:bg-[#152e24] rounded-3xl shadow-soft overflow-hidden min-h-[640px]">
                {/* Left Side (Marketing) - Only visible on large screens */}
                <div className="relative hidden lg:flex flex-col justify-between p-12 bg-primary text-white overflow-hidden h-full">
                    {/* Background Elements */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#008751] to-[#0f3d2a] opacity-100 z-0"></div>
                    <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary font-bold text-xl shadow-lg">F</div>
                            <span className="text-xl font-bold tracking-tight">Fortis Global Insurance</span>
                        </div>

                        <div className="space-y-8">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 shadow-inner-glow">
                                <span className="material-icons text-3xl text-white">favorite</span>
                            </div>

                            <div>
                                <h1 className="text-4xl font-bold leading-tight mb-4">Secure your future today.</h1>
                                <p className="text-lg text-white/80">Create an account in less than 2 minutes and get covered instantly.</p>
                            </div>

                            <ul className="space-y-4 text-white/90">
                                <li className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/5">
                                    <span className="material-icons text-green-300 text-xl">check_circle</span>
                                    <span className="font-medium">Instant policy issuance</span>
                                </li>
                                <li className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/5">
                                    <span className="material-icons text-green-300 text-xl">check_circle</span>
                                    <span className="font-medium">24/7 Claims support</span>
                                </li>
                                <li className="flex items-center gap-3 bg-white/10 p-3 rounded-xl border border-white/5">
                                    <span className="material-icons text-green-300 text-xl">check_circle</span>
                                    <span className="font-medium">Paperless documentation</span>
                                </li>
                            </ul>
                        </div>

                        <div className="text-sm text-white/60 font-medium">
                            © 2024 Fortis Global Insurance. All rights reserved.
                        </div>
                    </div>
                </div>

                {/* Right Side (Signup Form) */}
                <div className="relative flex flex-col justify-center p-8 sm:p-12 lg:p-16 h-full">
                    <div className="lg:hidden flex items-center gap-2 mb-8">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">F</div>
                        <span className="text-lg font-bold text-primary dark:text-white">FGI</span>
                    </div>

                    <div className="w-full max-w-md mx-auto space-y-6">
                        <div className="flex items-center justify-between mb-2">
                            <div>
                                <span className="text-xs font-bold text-primary tracking-wider uppercase mb-1 block">Step 1 of 2</span>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Basic Details</h2>
                            </div>
                            <div className="relative w-12 h-12">
                                <svg className="transform -rotate-90 w-12 h-12">
                                    <circle className="text-gray-100 dark:text-gray-700" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeWidth="5"></circle>
                                    <circle className="text-primary transition-all duration-1000 ease-out" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeDasharray="125.6" strokeDashoffset="62.8" strokeLinecap="round" strokeWidth="5"></circle>
                                </svg>
                                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[10px] font-extrabold text-primary">50%</span>
                            </div>
                        </div>

                        <p className="text-gray-500 dark:text-gray-400 text-sm">Let's get you started with your protection plan.</p>

                        <form className="space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300" htmlFor="first-name">First Name</label>
                                    <input className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary transition-all duration-200 ease-in-out dark:bg-background-dark/50 dark:border-neutral-dark dark:text-white dark:placeholder-gray-500 shadow-sm" id="first-name" name="first-name" placeholder="Oluwaseun" type="text" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300" htmlFor="last-name">Last Name</label>
                                    <input className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary transition-all duration-200 ease-in-out dark:bg-background-dark/50 dark:border-neutral-dark dark:text-white dark:placeholder-gray-500 shadow-sm" id="last-name" name="last-name" placeholder="Adeyemi" type="text" />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300" htmlFor="signup-email">Email Address</label>
                                <div className="relative">
                                    <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">mail_outline</span>
                                    <input className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3.5 pl-12 text-gray-900 placeholder-gray-400 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary transition-all duration-200 ease-in-out dark:bg-background-dark/50 dark:border-neutral-dark dark:text-white dark:placeholder-gray-500 shadow-sm" id="signup-email" name="signup-email" placeholder="name@example.com" type="email" />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300" htmlFor="phone">Phone Number</label>
                                <div className="flex group">
                                    <div className="flex items-center justify-center px-4 border border-r-0 border-gray-200 dark:border-neutral-dark rounded-l-xl bg-gray-50 dark:bg-background-dark/50 text-gray-700 dark:text-gray-300 text-sm font-semibold whitespace-nowrap shadow-sm">
                                        <span className="mr-2 text-xl">🇳🇬</span> +234
                                    </div>
                                    <input className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3.5 pl-4 rounded-l-none text-gray-900 placeholder-gray-400 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary transition-all duration-200 ease-in-out dark:bg-background-dark/50 dark:border-neutral-dark dark:text-white dark:placeholder-gray-500 shadow-sm" id="phone" name="phone" placeholder="80 1234 5678" type="tel" />
                                </div>
                            </div>

                            <Link to="/onboarding" className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-xl shadow-lg shadow-primary/20 text-sm font-bold text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all group mt-6">
                                Next Step
                                <span className="material-icons text-lg ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>

                            <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-6 leading-relaxed px-4">
                                By creating an account, you agree to our <a className="text-primary hover:text-primary-hover hover:underline font-semibold" href="#">Terms of Service</a> and <a className="text-primary hover:text-primary-hover hover:underline font-semibold" href="#">Privacy Policy</a>.
                            </p>
                        </form>

                        <div className="text-center pt-2">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Already have an account? <Link to="/login" className="font-bold text-primary hover:text-primary-hover">Log in</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
