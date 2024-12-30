// import React from 'react';

// // You can import images here
// import htmlLogo from '../assets/html.png';
// import cssLogo from '../assets/css.webp';
// import javascriptLogo from '../assets/js1.png';
// import reactLogo from '../assets/react1.png';
// import mongodbLogo from '../assets/mongodb.png';
// import bootstrapLogo from '../assets/Bootstrap.png';
// import nodejsLogo from '../assets/node.png';
// import expressLogo from '../assets/Expressjs.png';
// import tailwindLogo from '../assets/tailwind.png';

// const Skills = () => {
//   const skills = [
//     {
//       name: "HTML",
//       logo: htmlLogo,  // Use the imported image
      
//     },
//     {
//       name: "CSS",
//       logo: cssLogo,  // Use the imported image
     
//     },
//     {
//       name: "JAVASCRIPT",
//       logo: javascriptLogo,  // Use the imported image
     
//     },
//     {
//       name: "REACT",
//       logo: reactLogo,  // Use the imported image
     
//     },
//     {
//       name: "MONGODB",
//       logo: mongodbLogo,  // Use the imported image
     
//     },
//     {
//       name: "BOOTSTRAP",
//       logo: bootstrapLogo,  // Use the imported image
      
//     },
//     {
//       name: "NODE JS",
//       logo: nodejsLogo,  // Use the imported image
      
//     },
//     {
//       name: "EXPRESS",
//       logo: expressLogo,  // Use the imported image
    
//     },
//     {
//       name: "TAILWIND CSS",
//       logo: tailwindLogo,  // Use the imported image
      
//     }
//   ];

//   return (
//     <section id="skills" className="bg-gray-100 flex items-center justify-center min-h-screen">
//       <div className="max-w-[1060px] text-gray-100 text-center">
//         <h3 className="text-4xl font-semibold">
//           <span className="text-[#001b5e]">𝙎𝙆𝙄𝙇𝙇𝙎</span>
//         </h3>
//         <div className="flex items-center justify-center mt-12 gap-8 flex-wrap">
//           {skills?.map((skill, i) => (
//             <div
//               key={i}
//               className=" border-cyan-100 relative min-w-[100px] max-w-[160px] p-4 rounded-xl transform-gpu hover:scale-105 transition-all duration-300 ease-in-out"
//             >
//               <p className="text-xl mb-2">{skill.name}</p>
//               <div
//                 className="w-32 h-32 flex items-center justify-center rounded-full group-hover:rotate-[180deg] transition-transform duration-500 ease-in-out"
//                 style={{
//                   background: `conic-gradient(rgb(8, 145, 170) 0%, rgb(8, 145, 170) 100%)`,
//                 }}
//               >
//                 <div className="text-6xl w-28 h-28 bg-gray-700 rounded-full flex items-center justify-center group-hover:text-cyan-100 group-hover:scale-110 transition-all duration-300 ease-in-out">
//                   <img
//                     src={skill.logo}
//                     alt={skill.name}
//                     className="w-16 h-16 object-contain"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

// Import images
import React from 'react';

import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.webp';
import javascriptLogo from '../assets/js1.png';
import reactLogo from '../assets/react1.png';
import mongodbLogo from '../assets/mongodb.png';
import bootstrapLogo from '../assets/Bootstrap.png';
import nodejsLogo from '../assets/node.png';
import expressLogo from '../assets/Expressjs.png';
import tailwindLogo from '../assets/tailwind.png';
import vscodeLogo from '../assets/vscode.jpeg'; 
import chromeLogo from '../assets/chrome.png'; 
import chatgptLogo from '../assets/chatgpt.jpg';

const Skills = () => {
  const skills = [
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "JAVASCRIPT", logo: javascriptLogo },
    { name: "REACT", logo: reactLogo },
    { name: "MONGODB", logo: mongodbLogo },
    { name: "BOOTSTRAP", logo: bootstrapLogo },
    { name: "NODE JS", logo: nodejsLogo },
    { name: "EXPRESS", logo: expressLogo },
    { name: "TAILWIND CSS", logo: tailwindLogo },
  ];
  const tools = [
    { name: "VS Code", logo: vscodeLogo },
    { name: "Google Chrome", logo: chromeLogo },
    {name: "Chatgpt", logo:chatgptLogo}
  ];
  return (
    <section id="skills" className="bg-gray-100 flex items-center justify-center min-h-screen relative overflow-hidden ">
  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 animate-bg-move 
  bg-[length:200%_200%] -z-10"></div>
  <div className="max-w-[1060px] text-gray-100 text-center motion-preset-wobble motion-duration-1500">
    <h3 className="text-4xl font-semibold">
      <span className="text-[#001b5e]">𝙎𝙆𝙄𝙇𝙇𝙎</span>
    </h3>
    <div className="flex items-center justify-center mt-6 gap-8 flex-wrap mb-3">
      {skills.map((skill, i) => (
        <div key={i}>
          <p className="text-xl mb-2">{skill.name}</p>
          <div
            className="w-32 h-32 flex items-center justify-center rounded-full group-hover:rotate-[180deg] transition-transform duration-500 ease-in-out"
            style={{
              background: `conic-gradient(rgb(41, 45, 46) 0%, rgb(28, 30, 31) 100%)`,
            }}
          >
            <div className="text-6xl w-28 h-28 bg-gray-700 rounded-full flex items-center justify-center group-hover:text-cyan-100 group-hover:scale-110 transition-all duration-300 ease-in-out">
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
    <h3 className="text-4xl font-semibold mt-8">
      <span className="text-[#001b5e]">𝙏𝙊𝙊𝙇𝙎</span>
    </h3>
    <div className="flex items-center justify-center mt-5 gap-8 flex-wrap">
      {tools.map((tool, i) => (
        <div key={i}>
          <p className="text-xl mb-2">{tool.name}</p>
          <div
            className="w-32 h-32 flex items-center justify-center rounded-full group-hover:rotate-[180deg] transition-transform duration-500 ease-in-out"
            style={{
              background: `conic-gradient(rgb(48, 13, 49) 0%, rgb(58, 12, 44) 100%)`,
            }}
          >
            <div className="text-6xl w-28 h-28 bg-gray-700 rounded-full flex items-center justify-center group-hover:text-cyan-100 group-hover:scale-110 transition-all duration-300 ease-in-out">
              <img
                src={tool.logo}
                alt={tool.name}
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};
export default Skills;