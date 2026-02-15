import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Slide {
    id: number;
    title: React.ReactNode;
    description: string;
    icon: string;
    color: string;
    secondaryIcons?: { icon: string; delay: string; position: string }[];
}

const slides: Slide[] = [
    {
        id: 1,
        title: <>One Platform, <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#25b57d]">Complete Peace</span> of Mind.</>,
        description: "Protect everything that matters to you with FGI. From your family's health to your daily hustle, we've got you covered in one simple app.",
        icon: 'verified_user',
        color: 'primary',
        secondaryIcons: [
            { icon: 'family_restroom', delay: '1s', position: '-top-4 -right-4 lg:top-0 lg:-right-8' },
            { icon: 'home', delay: '0.5s', position: '-bottom-8 left-8 lg:-bottom-4 lg:left-12' },
            { icon: 'directions_car', delay: '2s', position: 'top-1/2 -left-8 lg:-left-12' },
        ]
    },
    {
        id: 2,
        title: <>Get Paid While <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">You Recover</span>.</>,
        description: "Daily cash benefits when you're hospitalized. Don't let health issues pause your income.",
        icon: 'medical_services',
        color: 'blue-500',
        secondaryIcons: [
            { icon: 'payments', delay: '1s', position: '-top-4 -right-4 lg:top-0 lg:-right-8' },
            { icon: 'local_hospital', delay: '0.5s', position: '-bottom-8 left-8 lg:-bottom-4 lg:left-12' },
        ]
    },
    {
        id: 3,
        title: <>Secure Your <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Harvest</span> & Future.</>,
        description: "Agricultural insurance that protects your farm and livelihood against the unexpected.",
        icon: 'agriculture',
        color: 'amber-500',
        secondaryIcons: [
            { icon: 'wb_sunny', delay: '1s', position: '-top-4 -right-4 lg:top-0 lg:-right-8' },
            { icon: 'water_drop', delay: '0.5s', position: '-bottom-8 left-8 lg:-bottom-4 lg:left-12' },
        ]
    },
    {
        id: 4,
        title: <>More Than Just <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Insurance</span>.</>,
        description: "Investment plans, student welfare, and comprehensive coverage for every stage of life.",
        icon: 'card_giftcard',
        color: 'purple-500',
        secondaryIcons: [
            { icon: 'school', delay: '1s', position: '-top-4 -right-4 lg:top-0 lg:-right-8' },
            { icon: 'trending_up', delay: '0.5s', position: '-bottom-8 left-8 lg:-bottom-4 lg:left-12' },
        ]
    }
];

const Onboarding: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        } else {
            navigate('/dashboard');
        }
    };

    const skip = () => {
        navigate('/dashboard');
    };

    const slide = slides[currentSlide];

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-neutral-dark dark:text-background-light min-h-screen flex items-center justify-center p-4 lg:p-0 overflow-hidden">
            <main className="w-full h-screen relative flex flex-col lg:flex-row bg-white dark:bg-[#162922] shadow-2xl overflow-hidden">
                {/* Top Navigation (Skip Button) */}
                <div className="absolute top-6 right-6 lg:top-10 lg:right-10 z-20">
                    <button onClick={skip} className="text-neutral-mid dark:text-primary/70 hover:text-primary dark:hover:text-primary transition-colors font-medium text-sm lg:text-base">
                        Skip Intro
                    </button>
                </div>

                {/* Left Pane: Visual/Illustration Stage */}
                <section className="lg:w-1/2 h-1/2 lg:h-full relative bg-background-light dark:bg-background-dark flex items-center justify-center p-8 lg:p-16 overflow-hidden">
                    <div className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -top-20 -left-20"></div>
                    <div className="absolute w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl bottom-0 right-0"></div>

                    {/* Illustration Container */}
                    <div key={slide.id} className="relative z-10 w-full max-w-md aspect-square flex items-center justify-center float-animation slide-content">
                        {/* Central Shield */}
                        <div className="w-48 h-48 lg:w-64 lg:h-64 bg-white dark:bg-[#1e332c] rounded-[2rem] shadow-lg flex items-center justify-center relative z-10 border border-primary/10">
                            {/* Using a placeholder or the provided image if we want */}
                            <img alt="Abstract shield" className="absolute w-full h-full object-cover opacity-90 rounded-[2rem] mix-blend-overlay" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYyhnMPgEFeIHr3i_usCJXOElFwkATxqr7gp_x0RPgzmq0JVcYYcQvzOVNNKSkvZEDJOtgxsU_OupiLWi3AMkQbRZ1y8aqneIBMyZtSlN08HTG362YpB3gBTay_Ep6FFm3pjWhNePDhA0vTZM9S3xI8__c8Q9xqiE-0umDqG8J1YgOuF82V5XBmjSmV85C5KGISZZ5akyQp1zfEZ4i5ZrOMoNln-fcSGVhItAwCq5d9z667v0qPKEc72S1GsEA8-14hUX4bWNMseKT" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className={`material-icons-outlined text-6xl lg:text-8xl text-${slide.color} ${slide.color === 'primary' ? 'text-primary' : ''}`}>{slide.icon}</span>
                            </div>
                        </div>

                        {/* Floating Satellite Elements */}
                        {slide.secondaryIcons?.map((item, index) => (
                            <div key={index} className={`absolute ${item.position} w-16 h-16 lg:w-20 lg:h-20 bg-white dark:bg-[#1e332c] rounded-2xl shadow-md flex items-center justify-center animate-[float_4s_ease-in-out_infinite_${item.delay}]`}>
                                <span className="material-icons-outlined text-3xl text-neutral-mid dark:text-primary/80">{item.icon}</span>
                            </div>
                        ))}

                        <div className="absolute top-10 left-10 text-primary/20">
                            <svg fill="currentColor" height="60" width="60">
                                <pattern height="20" id="dots" patternUnits="userSpaceOnUse" width="20" x="0" y="0">
                                    <circle cx="2" cy="2" r="2"></circle>
                                </pattern>
                                <rect fill="url(#dots)" height="60" width="60"></rect>
                            </svg>
                        </div>
                    </div>
                </section>

                {/* Right Pane: Content & Navigation */}
                <section className="lg:w-1/2 h-1/2 lg:h-full flex flex-col justify-center px-8 lg:px-24 py-8 relative z-10">
                    <div className="flex-1 flex flex-col justify-center max-w-lg mx-auto lg:mx-0 slide-content" key={`content-${slide.id}`}>
                        <div className="flex items-center gap-2 mb-8">
                            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                                <span className="text-neutral-dark font-bold text-lg">F</span>
                            </div>
                            <span className="font-bold text-neutral-dark dark:text-white tracking-tight">Fortis Global</span>
                        </div>

                        <h1 className="text-3xl lg:text-5xl font-extrabold text-neutral-dark dark:text-white leading-tight mb-4">
                            {slide.title}
                        </h1>
                        <p className="text-neutral-mid dark:text-gray-400 text-lg leading-relaxed mb-8 lg:mb-12">
                            {slide.description}
                        </p>
                    </div>

                    <div className="flex items-center justify-between mt-auto pb-4 lg:pb-12 max-w-lg mx-auto lg:mx-0 w-full">
                        <div className="flex space-x-2">
                            {slides.map((s, index) => (
                                <div
                                    key={s.id}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-neutral-mid/20 dark:bg-white/20 hover:bg-primary/50'}`}
                                ></div>
                            ))}
                        </div>

                        <div>
                            <button onClick={nextSlide} className="group flex items-center justify-center w-14 h-14 rounded-full bg-neutral-dark dark:bg-white text-white dark:text-neutral-dark hover:bg-primary hover:text-neutral-dark dark:hover:bg-primary dark:hover:text-neutral-dark transition-all duration-300 shadow-lg hover:shadow-primary/25 hover:scale-105">
                                <span className="material-icons-outlined text-2xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Onboarding;
