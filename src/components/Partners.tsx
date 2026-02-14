

const partners = [
    { name: 'Pakasso', logo: '/assets/pakasso.png' },
    { name: 'Parallex Bank', logo: '/assets/parallex.png' },
    { name: 'MSR', logo: '/assets/msr.png' },
];

const Partners = () => {
    return (
        <section className="py-12 bg-white dark:bg-background-dark overflow-hidden">
            <div className="container mx-auto px-4 mb-8 text-center">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Our Trusted Partners</h2>
                <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="relative w-full max-w-7xl mx-auto">
                <div className="flex overflow-hidden group">
                    <div className="flex space-x-12 animate-marquee whitespace-nowrap py-4 items-center">
                        {/* Original Set */}
                        {partners.map((partner, index) => (
                            <div key={index} className="flex-shrink-0 w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        ))}
                        {/* Duplicate for seamless scrolling */}
                        {partners.map((partner, index) => (
                            <div key={`dup-${index}`} className="flex-shrink-0 w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        ))}
                        {/* Triplicate for wider screens */}
                        {partners.map((partner, index) => (
                            <div key={`trip-${index}`} className="flex-shrink-0 w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        ))}
                        {/* Quadruplicate for really wide screens */}
                        {partners.map((partner, index) => (
                            <div key={`quad-${index}`} className="flex-shrink-0 w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        ))}
                        {/* Quintuplicate just to be safe with few items */}
                        {partners.map((partner, index) => (
                            <div key={`quint-${index}`} className="flex-shrink-0 w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        ))}
                        {/* Sextuplicate just to be safe with few items */}
                        {partners.map((partner, index) => (
                            <div key={`sext-${index}`} className="flex-shrink-0 w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
