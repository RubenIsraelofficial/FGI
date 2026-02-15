
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
            <div className="absolute inset-0 pattern-grid pointer-events-none"></div>
            <div className="absolute top-20 right-0 w-1/3 h-1/3 bg-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gold/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary dark:text-primary-400 text-sm font-semibold mb-2">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Nigeria's #1 All-in-One Protection
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
                            One Plan. <br />
                            <span className="text-primary">Total Protection</span> <br />
                            for You and Your Family.
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0">
                            We've simplified insurance. Get comprehensive Life, Health, Income, and Asset coverage in a single, transparent subscription.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link to="/signup" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-primary/30 flex items-center justify-center gap-3 group">
                                Start Coverage
                                <span className="group-hover:translate-x-1 transition-transform material-icons-outlined">arrow_forward</span>
                            </Link>
                            <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 shadow-sm">
                                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                                    <span className="material-icons-outlined">verified</span>
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Premium</p>
                                    <p className="text-lg font-bold text-slate-900 dark:text-white">₦36,000<span className="text-sm font-medium text-slate-400">/year</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-500 dark:text-slate-400">
                            <span className="flex items-center gap-1"><span className="material-icons-outlined text-primary text-base">check_circle</span> Licensed by NAICOM</span>
                            <span className="flex items-center gap-1"><span className="material-icons-outlined text-primary text-base">check_circle</span> Cancel Anytime</span>
                        </div>
                    </div>

                    <div className="relative mx-auto lg:mr-0 max-w-lg lg:max-w-none w-full">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-surface-dark transform hover:scale-[1.02] transition-transform duration-500">
                            <img alt="Diverse group of Nigerian students and young professionals smiling confidently" className="w-full h-[500px] object-cover" data-alt="Happy diverse group of African people outdoors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAkYztHUmEaAnWTLX0iyT2QQRBbRf2IUU9zLn2xPCM9cATivfUMWQAogu4olAAYfImyL6gaN1V200ex_czi5Gljupmm8GIDhhGL8sd86JLtvgEJK-6Jdpp7SXZHnGj2odPyuhXNjETDpnmJ7H963On5wjhSHCtC2L3Cpph78gG0dedJ38VIXHy5ZLJqerlc_1Lr1SijSpsfXBqITr5YMZ5HaqEPEbLQ6bUQILvc3XQAkhZ8f9anXFIP9lVD7DmESlKGy-I8cx89b-y" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8 glass-panel p-4 rounded-xl flex items-center justify-between border-l-4 border-primary">
                                <div>
                                    <p className="text-white font-medium text-sm opacity-90">Active Protection</p>
                                    <div className="flex -space-x-2 mt-2">
                                        <img alt="Avatar 1" className="w-8 h-8 rounded-full border-2 border-white" data-alt="User avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3a287wUHS1i2CtJzX0GLy3UB2q-fbqw1BcoSoykIaNcdTni5P7kM5YKOgcFeZxBPOQVCbuoNFfr0bWmdg22Oi581uFezPI6Bbi6tSx5GKZDILrIC0ToIetmzcbzwvkn_nJz2M9SOlh5rzd1cuS1-WuyKqLfqIwMm42UMhHcpxmHagfmNlRccQY-a6A5XGzb0BNc-sD1QgzP9hx1U3Ld8o4I50WJcgOw7s3-hZVm5EGPUyUspGKIFxy66mG2VpzyeLdaoQxisbRQ4U" />
                                        <img alt="Avatar 2" className="w-8 h-8 rounded-full border-2 border-white" data-alt="User avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS8TYhXFKfdZUBWPE68aFnFScMojnBsMmYhJuEF_8yY3QaCCUB4gBERsFy1jalEwqHmNoPR5uMVBcHGx0GdXC8w4DZZDyvFkg07QnaX4QzFLeAtAnIqxDWy4dVg3SB1QNyJfE9wLL-LR4upvfgh6faFzz021pgDd4biwerWq7qVrR0uYn0cVpcjne7fgL4uKY3R1BOZIFTLVYXaua2koE33sCsYr5Xy4kqtfRaLFFVXHty55Eb14VAG2113A1zvMm0_nSP0B92Rwf7" />
                                        <img alt="Avatar 3" className="w-8 h-8 rounded-full border-2 border-white" data-alt="User avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_5YRJE0Wm9axX152_tPHU14GXmRpbaKBAX3j-OoBW6l9JxgsYoWP-q4DLtORiHeTlAv_NOsYhPIG-9vGwhO-EI3Hlr2wreSjxG6vHGXtYyaaXmRgCgHCCwSwWCTFZsY-nY5_olJhfIus7lQeG04u_3sSR3u61urVtYXFISn6vRsvN1K4eG5OQRBFJPoVoyX7ZEVrpb1PbFWTT4m_lIpXrOo_WcaoxAYFqPiLmPwBkfTEf-tbUnAWnzm0M-J8YQqfWBEwpkNy8EeSh" />
                                        <div className="w-8 h-8 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-xs font-bold">+2k</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="bg-primary/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">TRUSTED</span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold rounded-full opacity-20 blur-xl animate-pulse"></div>
                        <div className="absolute top-10 -left-10 bg-white dark:bg-surface-dark p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 animate-bounce" style={{ animationDuration: '3s' }}>
                            <div className="flex items-center gap-3">
                                <div className="bg-green-100 p-2 rounded-lg text-primary">
                                    <span className="material-icons-outlined">shield</span>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500">Status</p>
                                    <p className="text-sm font-bold text-primary">Fully Covered</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
