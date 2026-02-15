import React from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-12 antialiased selection:bg-primary/30 gap-12">
            <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white dark:bg-[#152e24] rounded-3xl shadow-soft overflow-hidden min-h-[640px]">
                {/* Left Side (Marketing) - Only visible on large screens */}
                <div className="relative hidden lg:flex flex-col justify-between p-12 bg-primary text-white overflow-hidden group h-full">
                    {/* Background Elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#008751] to-[#005c37] opacity-100 z-0"></div>
                    <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl group-hover:bg-white/15 transition-all duration-1000"></div>
                    <div className="absolute bottom-0 -left-20 w-80 h-80 bg-[#00ff99]/10 rounded-full blur-3xl"></div>
                    <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-primary font-bold text-xl shadow-lg">F</div>
                            <span className="text-xl font-bold tracking-tight">Fortis Global Insurance</span>
                        </div>

                        <div className="space-y-6">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-white/20 shadow-inner-glow">
                                <span className="material-icons text-3xl text-white">shield</span>
                            </div>
                            <h1 className="text-4xl font-bold leading-tight">Comprehensive Protection.</h1>
                            <p className="text-lg text-white/90 leading-relaxed max-w-sm">Join over 2 million Nigerians securing their legacy with FGI's trusted life, health, and auto insurance.</p>
                        </div>

                        {/* Testimonials/Trusted by */}
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 mt-8">
                            <div className="flex items-center gap-4 mb-2">
                                <div className="flex -space-x-3">
                                    <img className="w-10 h-10 rounded-full border-2 border-primary object-cover" alt="Portrait of a smiling Nigerian woman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7MqEa_U-QInFc1Z7ggmAiHMEPj4euuDl4wczC8LEeR_k5iETFuMM0LqLYni1-48_cBs-L6XaSuOAvVcepl5mRLne7BeL2gmnTInYi9j0zuq6s05tY0hfatHOW3fITwH24v_IvrCbs3lstkSDoyf6sRbSmNR60Ox1sw2fHSF1t7SFya733v74o3-JYj1r5kldzXEIaq93WIGhGaoUX6aoSl5TMzxK_5KusQ6l0MX4PF3hEzA9s7hvORA9zEN7793aGrS326N4ZHbfw" />
                                    <img className="w-10 h-10 rounded-full border-2 border-primary object-cover" alt="Portrait of a young African man" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsn-TDSJzYn9CBJ0Q_9xb1DVko7QwWvpgeg_UkL6gG18V4Cw4u3T1HpmePb5QB-aovf0DU96aETaoPTSbx3fZ9T_jhNyfSi15DPz2t65aQ3dxQJ4Vm_nS17YGq0s89uububZGTywZoh3wr9jIXZ-o3Ki2NG4rrtYsM7BHJEVnUmlBHgl_GAFBRCCxEom7jF4oM-RYWYjjfOx9V9yMiKOFH9dVdDT92U1Skay7_ssFvJ8a5W_BIV0eJAJZIOOxrkgute_DN5m5VC9p1" />
                                    <img className="w-10 h-10 rounded-full border-2 border-primary object-cover" alt="Portrait of a professional woman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABfXqibpGuFAUyz3Zf7ts_XBn9ZJyRJNR-8fHF_Pkji-lssoFewEaMQr9SA-7-vBausqUOM9oekxDx_xLUZZOZU4mVYj_4Sc_rcOus5FaBWXAFBgSQwnvysOy9JA3zFFJTclbaSGN9jB36jArQfh29Kn0RYr8nhRfVe5V7FaCBO7LbEAlH4QsPu1yfCILYOmRtPiCzlW7cYdYdU8gfASlLY654IsUBDhiaOTy9okBbyklnZr1eljUSPBPd3xYlB0SZgUXMUEc_7wWS" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-1 text-yellow-400 text-sm">
                                        <span className="material-icons text-base">star</span>
                                        <span className="material-icons text-base">star</span>
                                        <span className="material-icons text-base">star</span>
                                        <span className="material-icons text-base">star</span>
                                        <span className="material-icons text-base">star</span>
                                    </div>
                                    <span className="text-xs font-medium text-white/90">Trusted by 500k+ Users</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side (Login Form) */}
                <div className="relative flex flex-col justify-center p-8 sm:p-12 lg:p-16 h-full">
                    <div className="lg:hidden flex items-center gap-2 mb-8">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">F</div>
                        <span className="text-lg font-bold text-primary dark:text-white">FGI</span>
                    </div>

                    <div className="w-full max-w-md mx-auto space-y-8">
                        <div className="text-center lg:text-left">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome Back</h2>
                            <p className="text-gray-500 dark:text-gray-400">Please enter your details to sign in.</p>
                        </div>

                        <form className="space-y-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">Email Address</label>
                                <div className="relative group">
                                    <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors text-xl">mail_outline</span>
                                    <input className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3.5 pl-12 text-gray-900 placeholder-gray-400 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary transition-all duration-200 ease-in-out dark:bg-background-dark/50 dark:border-neutral-dark dark:text-white dark:placeholder-gray-500 shadow-sm" id="email" name="email" placeholder="name@example.com" type="email" />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300" htmlFor="password">Password</label>
                                    <a className="text-sm font-semibold text-primary hover:text-primary-hover transition-colors" href="#">Forgot Password?</a>
                                </div>
                                <div className="relative group">
                                    <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors text-xl">lock_outline</span>
                                    <input className="w-full rounded-xl border-gray-200 bg-gray-50 px-4 py-3.5 pl-12 text-gray-900 placeholder-gray-400 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary transition-all duration-200 ease-in-out dark:bg-background-dark/50 dark:border-neutral-dark dark:text-white dark:placeholder-gray-500 shadow-sm" id="password" name="password" placeholder="••••••••" type="password" />
                                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors" type="button">
                                        <span className="material-icons text-xl">visibility_off</span>
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary bg-gray-50 cursor-pointer" id="remember-me" name="remember-me" type="checkbox" />
                                <label className="ml-2 block text-sm text-gray-600 dark:text-gray-400 cursor-pointer" htmlFor="remember-me">Keep me logged in</label>
                            </div>

                            <Link to="/dashboard" className="w-full flex justify-center py-3.5 px-4 border border-transparent rounded-xl shadow-lg shadow-primary/20 text-sm font-bold text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all transform active:scale-[0.98]">
                                Log In
                            </Link>
                        </form>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200 dark:border-neutral-dark"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white dark:bg-[#152e24] text-gray-500 font-medium">Or continue with</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center w-full px-4 py-3 border border-gray-200 dark:border-neutral-dark rounded-xl shadow-card bg-white dark:bg-transparent text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 hover:shadow-md dark:hover:bg-white/5 transition-all duration-200" type="button">
                                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                                </svg>
                                Google
                            </button>
                            <button className="flex items-center justify-center w-full px-4 py-3 border border-gray-200 dark:border-neutral-dark rounded-xl shadow-card bg-white dark:bg-transparent text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 hover:shadow-md dark:hover:bg-white/5 transition-all duration-200" type="button">
                                <svg className="h-5 w-5 mr-2 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.05 20.28c-.98.95-2.05 1.6-3.23 1.88-1.18.28-2.43.24-3.6-.14-1.16-.38-2.22-1.07-3.09-1.96-.86-.9-1.5-1.99-1.85-3.21-.18-.62-.27-1.27-.27-1.93 0-.66.09-1.31.27-1.93.35-1.22.99-2.31 1.85-3.21.87-.9 1.93-1.58 3.09-1.96 1.17-.38 2.42-.42 3.6-.14 1.18.28 2.25.93 3.23 1.88 1.05 1.01 1.78 2.32 2.05 3.79.13.71.2 1.45.2 2.2 0 .75-.07 1.49-.2 2.2-.27 1.47-1 2.78-2.05 3.79z"></path>
                                    <path d="M12.003 12.003c0-3.353 2.716-6.069 6.069-6.069 0 0-1.242-2.353-4.008-2.353-1.93 0-3.864 1.127-4.885 1.127-1.058 0-2.695-1.088-4.46-1.088-2.292 0-4.409 1.343-5.594 3.41-2.381 4.145-.617 10.278 1.705 13.639 1.127 1.637 2.478 3.449 4.243 3.39 1.696-.069 2.333-1.098 4.39-1.098 2.049 0 2.617 1.098 4.4 1.088 1.823-.029 2.979-1.656 4.096-3.292 1.284-1.872 1.813-3.694 1.842-3.792-.04-.02-3.547-1.362-3.547-5.429z"></path>
                                </svg>
                                Apple
                            </button>
                        </div>

                        <p className="text-center text-sm text-gray-500">
                            Don't have an account? <Link to="/signup" className="font-bold text-primary hover:text-primary-hover">Create Account</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
