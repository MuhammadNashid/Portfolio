// import React from "react";
// import { TypeAnimation } from 'react-type-animation';
// import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// import { useSpring, animated } from '@react-spring/web'; // Import react-spring

// const Main = () => {
//   // Animation for fading in and sliding the content
//   const fadeIn = useSpring({
//     opacity: 1,
//     transform: 'translateY(0)',
//     from: { opacity: 0, transform: 'translateY(50px)' },
//     config: { tension: 50, friction: 20 }
//   });

//   // Animation for social icons
//   const iconSpring = useSpring({
//     opacity: 1,
//     transform: 'translateY(0)',
//     from: { opacity: 0, transform: 'translateY(20px)' },
//     delay: 3000, // Delay for a staggered effect
//     config: { tension: 180, friction: 15 }
//   });

//   return (
//     <div id="main">
//       <img className="w-full h-screen object-cover animate-bounce" src="/src/components/comport.jpeg" alt="background" />
//       <div className="w-full h-screen absolute top-0 left-0 bg-white/70">
//         <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center text-blue-950">
//           <img src="/src/Njn.jpeg" alt="Njn"  className="w-64 h-64 rounded-full ms-[600px]  motion-preset-seesaw motion-duration-1000"/>
//           {/* Apply animation to the heading */}
//           <animated.h1
//             style={fadeIn}
//             className="sm:text-5xl text-4xl font-bold text-gray-800  font-serif motion-preset-wobble motion-duration-2000"
//           >
//             I'm Muhammad Nashid
//           </animated.h1>

//           {/* Type animation stays as is */}
//           <h2 className="flex sm:text-3xl text-2xl pt-4 text-teal-900 text-opacity-50 animate-bounce">
//             I'm a
//             <TypeAnimation
//               sequence={[
//                 'Developer',
//                 4000,
//                 'Coder',
//                 4000,
//                 'Designer',
//                 4000,
//               ]}
//               wrapper="div"
//               cursor={true}
//               repeat={Infinity}
//               style={{ fontSize: '1em', paddingLeft: '5px' }}
//             />
//           </h2>

//           {/* Apply animation to social icons */}
//           <animated.div style={iconSpring} className="flex justify-between pt-6 max-w-[200px] w-full animate-bounce">
//             <FaTwitter className="cursor-pointer" size={20} />
//             <FaFacebookF className="cursor-pointer" size={20} />
//             <FaInstagram className="cursor-pointer" size={20} />
//             <FaLinkedinIn className="cursor-pointer" size={20} />
//           </animated.div>
//         </div>
//         <div>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;


import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
    return (
        <div id="main">
            <img className="w-full h-screen object-cover" src="/src/components/comport.jpeg" alt="Background" />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/80'>
                <div className='max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center text-blue-950'>
                    {/* Profile Picture */}
                    <img 
                        className="w-64 h-64 rounded-full border-2 ms-[500px] border-gray-500 motion-preset-seesaw motion-duration-700 " 
                        src="/src/Njn.jpeg" 
                        alt="Njn" 
                    />
                    
                    <h1 className=' sm:text-5xl text-4xl font-bold text-gray-800 font-serif motion-preset-wobble motion-duration-1500'>
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
                    
                    <div className='flex justify-between pt-6 max-w-[200px] w-full animate-bounce'>
                        <FaTwitter className='cursor-pointer' size={20} />
                        <FaFacebookF className='cursor-pointer' size={20} />
                        <FaInstagram className='cursor-pointer' size={20} />
                        <FaLinkedinIn className='cursor-pointer' size={20} />
                    </div>
                    <div class="mt-48 flex">
            <div class="relative mx-auto h-10 w-10 ">
          <div class="relative ml-80 h-20 w-20 animate-bounce rounded-full border-2 bg-green-800">
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