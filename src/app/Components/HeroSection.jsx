'use client';
import { useState } from 'react';
import MarqueeText from 'react-marquee-text';


const HeroSection = () => {
    const [showBalance, setShowBalance] = useState(false);
    const [balanceValue, setBalanceValue] = useState('0.00');

    const handleTapToView = () => {
        setShowBalance(true);

        setTimeout(() => {
            setShowBalance(false);
        }, 3000);
    };

    return (
        <div className="w-[90%] md:w-[90%] lg:w-[90%]  mx-auto">
            <div className="text-center">
                <div className="">

                    <div className="py-3 ">
                        <div className="">
                            <h2 className="font-semibold text-2xl mb-2">
                                Your Balance
                            </h2>
                            <div className="">
                                {!showBalance ? (
                                    <button
                                        onClick={handleTapToView}
                                        className="btn btn-primary btn-md"
                                    >
                                        Tap to View Balance
                                    </button>
                                ) : (
                                    <div className="text-2xl font-bold text-green-600">
                                        ৳ {balanceValue} BDT
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Marquee Text */}
                    <div className='flex gap-1 bg-amber-300 container mx-auto'>
                        <div>
                            <h2 className='bg-red-500 px-2 text-white font-semibold'>Update: </h2>
                        </div>
                        <MarqueeText
                            duration={30}
                            pauseOnHover={true}
                            direction="right"
                            >
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid sint, dolore voluptatum, beatae sed quam facilis voluptas ad, quas repudiandae libero. Deleniti molestias voluptatibus dignissimos molestiae alias quae reiciendis quas.
                        </MarqueeText>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HeroSection;