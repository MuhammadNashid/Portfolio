import React from "react";
import { TypeAnimation } from 'react-type-animation';

const Main = () => {
    return (
        <div id="main" className="relative w-full h-screen">
            {/* Background Image */}
            <img 
                className="w-full h-full object-cover" 
                src="/src/cm.jpg" 
                alt="Background" 
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-white/70">
                <div className="relative max-w-[1200px] mx-auto h-full flex flex-col justify-center items-center text-blue-950">
                    
                    {/* Profile Picture */}
                    <img 
                        className="absolute top-20 right-4 sm:top-24 sm:right-8 lg:top-32 lg:right-16 w-32 h-32 sm:w-40 sm:h-40 lg:w-64 lg:h-64 rounded-full border-2 border-gray-500 motion-preset-seesaw motion-duration-1500" 
                        src="/src/Njn.jpeg" 
                        alt="Profile" 
                    />
                    
                    {/* Main Heading */}
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 font-serif motion-preset-wobble motion-duration-2000">
                        I'm Muhammad Nashid K
                    </h1>
                    
                    {/* Animated Subtext */}
                    <h2 className="flex text-xl sm:text-2xl lg:text-3xl pt-4 text-teal-900 text-opacity-50 animate-bounce">
                        I'm a
                        <TypeAnimation
                            sequence={[
                                'Developer', 
                                2000, 
                                'Coder', 
                                2000, 
                                'Designer',
                                2000, 
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: 'inherit', paddingLeft: '5px' }}
                        />
                    </h2>
                    
                    {/* Bouncing Animation */}
                    <div className="absolute bottom-10">
                        <div className="relative h-10 w-10">
                            <div className="relative h-20 w-20 animate-bounce rounded-full border-2">
                                <div className="absolute bottom-0 right-10">
                                    <div className="relative h-40 animate-bounce">
                                        <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-black"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Main;