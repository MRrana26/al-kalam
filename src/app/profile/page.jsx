'use client';

import { useState } from 'react';

const ProfilePage = () => {
    const [showBalance, setShowBalance] = useState(false);

    const balanceValue = '50000.00';

    const handleTapToView = () => {
        setShowBalance(true);

        setTimeout(() => {
            setShowBalance(false);
        }, 3000);
    };

    return (
        <div className="w-[90%] mx-auto py-6">
            <div className="bg-white shadow-lg rounded-2xl p-5 border border-gray-100">
                
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

                    {/* Welcome Text */}
                    <div>
                        <h2 className="font-bold text-2xl text-gray-800">
                            Hey{' '}
                            <span className="text-teal-600">
                                MUBARAK ALOMPURY!
                            </span>
                        </h2>

                        <p className="text-gray-500 mt-1">
                            Welcome back to your profile dashboard
                        </p>
                    </div>

                    {/* Balance Section */}
                    <div className="bg-gray-50 rounded-xl px-5 py-4 border border-gray-200">
                        <h3 className="text-gray-600 text-sm mb-2">
                            Your Balance
                        </h3>

                        {!showBalance ? (
                            <button
                                onClick={handleTapToView}
                                className="bg-teal-600 hover:bg-teal-700 transition-all duration-300 text-white px-5 py-2 rounded-lg font-medium"
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

                {/* Extra Profile Card */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">

                    <div className="bg-teal-50 rounded-xl p-4 border border-teal-100">
                        <h4 className="text-gray-600 text-sm">
                            Account Status
                        </h4>

                        <p className="text-lg font-semibold text-teal-700 mt-1">
                            Active
                        </p>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                        <h4 className="text-gray-600 text-sm">
                            Registration
                        </h4>

                        <p className="text-lg font-semibold text-blue-700 mt-1">
                            11/05/2025
                        </p>
                    </div>

                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
                        <h4 className="text-gray-600 text-sm">
                            Rank
                        </h4>

                        <p className="text-lg font-semibold text-amber-600 mt-1">
                            Titanic
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfilePage;