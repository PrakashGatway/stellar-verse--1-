export default function TrainingPlans({ visiable }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#FBE7EA] py-8 px-2 sm:py-12 md:px-6">

            <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-12">
                <h2 className="mt-4 sm:mt-6 text-2xl sm:text-3xl font-semibold text-balance md:text-[40px]">
                    Plans &<span className="text-primary"> Pricing</span>
                </h2>
            </div>

            {/* Outer Big Card */}
            <div className="bg-white/70 backdrop-blur-lg rounded-2xl sm:rounded-3xl shadow p-4 sm:p-6 px-2 sm:px-10 max-w-6xl sm:max-w-7xl w-full flex flex-col md:flex-row gap-4 sm:gap-6 justify-center items-start relative overflow-visible">

                {/* Classroom Training */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 w-full md:w-1/3 flex flex-col justify-between border border-gray-100 transition-all duration-300 hover:border-pink-400">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Classroom training</h3>
                        <ul className="space-y-3 sm:space-y-4 text-[13px] sm:text-[15px] text-gray-700 leading-relaxed">
                            <li className="flex gap-2">
                                <span className="text-pink-500 text-sm sm:text-base">✔</span>
                                <span>Gateway Abroad Jaipur empowers you to achieve your TOEFL goals with top-notch instructors. They provide in-person guidance through a comprehensive offline preparation program.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-pink-500 text-sm sm:text-base">✔</span>
                                <span>Don't let academic hurdles hold you back from achieving success. Conquer the TOEFL exam entirely offline and unlock the door to a thriving academic journey.</span>
                            </li>
                        </ul>
                    </div>
                    <button onClick={() => visiable(true)} className="mt-6 sm:mt-8 bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 sm:py-3 rounded-full w-full">
                        Choose Plan
                    </button>
                </div>

                {/* Live Online Training */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 w-full md:w-1/3 flex flex-col justify-between border border-gray-100 transition-all duration-300 hover:border-pink-400">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Live online training</h3>
                        <ul className="space-y-3 sm:space-y-4 text-[13px] sm:text-[15px] text-gray-700 leading-relaxed">
                            <li className="flex gap-2">
                                <span className="text-pink-500 text-sm sm:text-base">✔</span>
                                <span>Level Up Your Scores: Anytime, Anywhere. Conquer standardized tests from the comfort of your home with our interactive online prep courses.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-pink-500 text-sm sm:text-base">✔</span>
                                <span>Our flexible online classes and dedicated support ensure you can progress at your own pace, tailoring your learning journey to your busy schedule.</span>
                            </li>
                        </ul>
                    </div>
                    <button onClick={() => visiable(true)} className="mt-6 sm:mt-8 bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 sm:py-3 rounded-full w-full">
                        Choose Plan
                    </button>
                </div>

                {/* Hybrid Training (Most Popular - Extends Outside) */}
                <div className="relative bg-[#D71635] text-white rounded-2xl mt-3  sm:rounded-3xl p-8 sm:p-12 w-full md:w-1/3 flex flex-col justify-between border border-red-400 transform -translate-y-2 sm:-translate-y-12 md:-translate-y-16 shadow-xl">
                    <span className="absolute -top-3 right-3 sm:right-6 bg-black text-white text-xs sm:text-sm font-semibold py-1 px-2.5 sm:px-3 rounded-full z-10">
                        Most Popular
                    </span>

                    <div>
                        <h3 className="text-2xl sm:text-3xl text-white font-semibold mb-3 sm:mb-4">Hybrid</h3>
                        <ul className="space-y-3 sm:space-y-4 text-[13px] sm:text-[15px] leading-relaxed">
                            <li className="flex gap-2">
                                <span className="text-white text-sm sm:text-base">✔</span>
                                <span>Get the best of both worlds with our hybrid courses - the flexibility of online learning combined with the personalized support of in-person instruction!</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-white text-sm sm:text-base">✔</span>
                                <span>Why choose between online convenience and offline expertise when you can have both? Experience the ultimate exam prep fusion with our hybrid courses!</span>
                            </li>
                        </ul>
                    </div>

                    <button onClick={() => visiable(true)} className="mt-6 sm:mt-8 bg-black hover:bg-gray-900 text-white font-semibold py-2.5 sm:py-3 rounded-full w-full">
                        Choose Plan
                    </button>
                </div>
            </div>
        </div>
    );
}