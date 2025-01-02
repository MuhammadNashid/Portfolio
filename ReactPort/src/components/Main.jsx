import React from "react";
import { TypeAnimation } from 'react-type-animation';

const Main = () => {
    return (
        <div id="main">
            <img className="w-full h-screen object-cover" src="/src/cm.jpg" alt="Background" />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/70'>
                <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center text-blue-950'>
                    {/* Profile Picture */}
                    <img 
                        className="w-64 h-64 rounded-full border-2 ms-[500px] border-gray-500 motion-preset-seesaw motion-duration-1500" 
                        src="/src/Njn.jpeg" 
                        alt="Njn" 
                    />
                    
                    <h1 className=' sm:text-5xl text-4xl font-bold text-gray-800 font-serif motion-preset-wobble motion-duration-2000'>
                        I'm Muhammad Nashid K
                    </h1>
                    
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-teal-900 text-opacity-50 animate-bounce'>
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
                            wrapper='div'
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                        />
                    </h2>
                    
                  
                    <div class="mt-[470px] flex ">
            <div class="relative mx-auto h-10 w-10 ">
          <div class="relative ml-80 h-20 w-20 animate-bounce rounded-full border-2" >
          <div class="absolute bottom-0 right-10">
          <div class="relative h-40 animate-bounce">
          <div class="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-black"></div>
        </div>
      </div>
    </div>
  </div>
</div>
                </div>
            </div> 
        </div>
        
    )
}

export default Main;