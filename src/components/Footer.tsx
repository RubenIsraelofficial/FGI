import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-50 dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">F</div>
                            <span className="font-bold text-xl tracking-tight text-primary dark:text-white">Fortis<span className="text-slate-900 dark:text-gray-400 font-light">Global</span></span>
                        </div>
                        <p className="text-slate-500 text-sm mb-4">
                            Protecting your tomorrow, today. Simple, reliable, and tailored for you.
                        </p>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-gray-700 flex items-center justify-center text-slate-500 hover:text-primary cursor-pointer transition-colors">
                                <span className="text-xs font-bold">in</span>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-gray-700 flex items-center justify-center text-slate-500 hover:text-primary cursor-pointer transition-colors">
                                <span className="text-xs font-bold">x</span>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-gray-700 flex items-center justify-center text-slate-500 hover:text-primary cursor-pointer transition-colors">
                                <span className="text-xs font-bold">ig</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                            <li><a className="hover:text-primary" href="#">Life Insurance</a></li>
                            <li><a className="hover:text-primary" href="#">Health Cash</a></li>
                            <li><a className="hover:text-primary" href="#">Income Protection</a></li>
                            <li><a className="hover:text-primary" href="#">For Students</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                            <li><a className="hover:text-primary" href="#">About Us</a></li>
                            <li><a className="hover:text-primary" href="#">Careers</a></li>
                            <li><a className="hover:text-primary" href="#">Press</a></li>
                            <li><a className="hover:text-primary" href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                            <li><a className="hover:text-primary" href="#">Privacy Policy</a></li>
                            <li><a className="hover:text-primary" href="#">Terms of Service</a></li>
                            <li><a className="hover:text-primary" href="#">NAICOM License</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-400">© 2023 Fortis Global Insurance. All rights reserved.</p>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        <span class="text-xs text-slate-400">Systems Operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
