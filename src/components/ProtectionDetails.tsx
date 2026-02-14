import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ProtectionDetails = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    return (
        <div className="py-20 bg-background-light dark:bg-background-dark min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-8">
                    <Link to="/" className="inline-flex items-center text-primary font-semibold hover:gap-2 transition-all">
                        <span className="material-icons-outlined text-sm mr-1">arrow_back</span> Back to Home
                    </Link>
                </div>

                <div className="bg-white dark:bg-surface-dark rounded-3xl shadow-soft overflow-hidden">

                    {/* Fire & Market Assets Protection */}
                    <div id="fire" className="p-8 md:p-12 border-b border-gray-100 dark:border-gray-800">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                            <span className="material-icons-outlined text-4xl">storefront</span>
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Fire & Market Assets Protection</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 font-medium">Protecting your business, goods, and investments against sudden loss.</p>
                        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
                            <p className="mb-6">Markets, shops, warehouses, and business premises are often exposed to risks such as fire outbreaks, theft, vandalism, and unexpected disasters. A single incident can wipe out years of hard work.</p>

                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">What This Covers:</h4>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <p className="font-semibold mb-2">Fire damage to:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Shops</li>
                                        <li>Market stalls</li>
                                        <li>Warehouses</li>
                                        <li>Business premises</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold mb-2">Protection of:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Goods and stock</li>
                                        <li>Trading equipment</li>
                                        <li>Business tools</li>
                                        <li>Financial relief to restart operations after loss</li>
                                    </ul>
                                </div>
                            </div>

                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Why It Matters:</h4>
                            <p className="mb-4">This pillar ensures that traders, shop owners, and entrepreneurs can recover quickly after disasters without losing their livelihood.</p>
                            <p className="italic font-medium text-primary">FGI protects your hustle, your investment, and your future.</p>
                        </div>
                    </div>

                    {/* Health & Hospitalization Protection */}
                    <div id="health" className="p-8 md:p-12 border-b border-gray-100 dark:border-gray-800 bg-slate-50 dark:bg-black/20">
                        <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
                            <span className="material-icons-outlined text-4xl">medical_services</span>
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Health & Hospitalization Protection</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 font-medium">Because good health should never become financial hardship.</p>
                        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
                            <p className="mb-6">Medical emergencies often come suddenly and can create heavy financial pressure. FGI ensures that your health challenges do not turn into financial crises.</p>

                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">What This Covers:</h4>
                            <ul className="list-none space-y-3 mb-6 bg-white dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                                <li className="flex items-start gap-3">
                                    <span className="material-icons-outlined text-green-500 mt-1">check_circle</span>
                                    <span><strong>₦3,000 daily hospital cash benefit</strong></span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-icons-outlined text-green-500 mt-1">check_circle</span>
                                    <span>Payable when admitted for more than 2 days</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-icons-outlined text-green-500 mt-1">check_circle</span>
                                    <span>Coverage for up to 21 days</span>
                                </li>
                            </ul>

                            <p className="font-semibold mb-2">Helps support:</p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {['Medication', 'Feeding', 'Transportation', 'Caregiver expenses', 'Basic hospital needs'].map((item) => (
                                    <span key={item} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">{item}</span>
                                ))}
                            </div>

                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Why It Matters:</h4>
                            <p className="mb-4">Even when treatment is available, daily expenses can become overwhelming. This benefit ensures continuous financial support throughout recovery.</p>
                            <p className="italic font-medium text-blue-600 dark:text-blue-400">With FGI, you focus on healing, not worrying.</p>
                        </div>
                    </div>

                    {/* Farm & Livelihood Protection */}
                    <div id="farm" className="p-8 md:p-12 border-b border-gray-100 dark:border-gray-800">
                        <div className="w-16 h-16 rounded-2xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-6">
                            <span className="material-icons-outlined text-4xl">agriculture</span>
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Farm & Livelihood Protection</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 font-medium">Protecting farmers, artisans, traders, and income earners.</p>
                        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
                            <p className="mb-6">Agriculture and small businesses form the backbone of Nigeria’s economy. Natural disasters, illness, accidents, and unexpected setbacks can destroy livelihoods overnight.</p>

                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">What This Covers:</h4>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <p className="font-semibold mb-2">Support for:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Crop failure</li>
                                        <li>Natural disasters</li>
                                        <li>Loss of harvest</li>
                                        <li>Livestock loss</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold mb-2">Livelihood protection for:</p>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Farmers</li>
                                        <li>Traders</li>
                                        <li>Artisans</li>
                                        <li>Small business owners</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="mb-8 font-medium">Recovery and financial assistance after loss</p>

                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Why It Matters:</h4>
                            <p className="mb-4">This pillar ensures income stability, food security, and financial resilience for millions of Nigerians.</p>
                            <p className="italic font-medium text-purple-600 dark:text-purple-400">FGI protects your work, your income, and your independence.</p>
                        </div>
                    </div>

                    {/* Life & End-of-Life Support */}
                    <div id="life" className="p-8 md:p-12 bg-slate-50 dark:bg-black/20">
                        <div className="w-16 h-16 rounded-2xl bg-gold/10 text-gold-600 dark:text-gold flex items-center justify-center mb-6">
                            <span className="material-icons-outlined text-4xl">volunteer_activism</span>
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Life & End-of-Life Support</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 font-medium">Protecting your loved ones when life’s hardest moments arrive.</p>
                        <div className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
                            <p className="mb-6">In times of loss, families face both emotional pain and financial burden. FGI ensures your family is not left stranded.</p>

                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">What This Covers:</h4>
                            <ul className="list-none space-y-3 mb-8">
                                <li className="flex items-start gap-3">
                                    <span className="material-icons-outlined text-gold mt-1">verified</span>
                                    <span>Financial support to next of kin</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-icons-outlined text-gold mt-1">verified</span>
                                    <span>Funeral and burial assistance</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-icons-outlined text-gold mt-1">verified</span>
                                    <span>Emergency family welfare support</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-icons-outlined text-gold mt-1">verified</span>
                                    <span>Compassionate assistance during bereavement</span>
                                </li>
                            </ul>

                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Why It Matters:</h4>
                            <p className="mb-4">This pillar provides dignity, stability, and comfort when families need it most.</p>
                            <p className="italic font-medium text-gold-600 dark:text-gold">FGI protects your legacy and secures your family’s future.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProtectionDetails;
