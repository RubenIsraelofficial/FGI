import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel border-b border-gray-100 dark:border-gray-800' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">F</div>
                        <span className="font-bold text-xl tracking-tight text-primary dark:text-white">Fortis<span className="text-slate-900 dark:text-gray-400 font-light">Global</span></span>
                    </div>
                    <div className="hidden md:flex space-x-8 items-center">
                        <a className="text-sm font-medium text-slate-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors" href="#">Why FGI</a>
                        <a className="text-sm font-medium text-slate-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors" href="#">Our Plans</a>
                        <a className="text-sm font-medium text-slate-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors" href="#">Claims</a>
                        <a className="text-sm font-medium text-slate-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors" href="#">Support</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <a className="hidden sm:block text-sm font-semibold text-primary dark:text-primary-400" href="#">Log in</a>
                        <a className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg hover:shadow-primary/30 flex items-center gap-2" href="#pricing">
                            Get Protected
                            <span className="material-icons-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
