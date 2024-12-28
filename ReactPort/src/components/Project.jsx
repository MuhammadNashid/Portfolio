import React from 'react';
import ProjectItems from './ProjectItems';
import flipcartImg from '../assets/Flip.png';
import instaImg from '../assets/instagram.jpeg';
import olxImg from '../assets/olxi.png';
import bookmyshowImg from '../assets/book.jpg';
import bloodImg from '../assets/blood.jpg'
import weatherImg from '../assets/weather.jpeg'


const Projects = () => {
  return (
    <div id='projects' className='max-w-[1080px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
        Projects
      </h1>
      <p className='text-center py-8'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error cumque
        non animi labore incidunt ipsum officia culpa beatae necessitatibus!
        Nisi praesentium iusto pariatur impedit minus quisquam inventore
        laboriosam sed perferendis.
      </p>
      <div className='grid sm:grid-cols-2 gap-12 w-full h-full'>
        <ProjectItems img={instaImg} title='Insatgram' githubLink='https://github.com/MuhammadNashid/InstaReact.git'/>
        <ProjectItems img={flipcartImg} title='Flipcart' githubLink='https://github.com/MuhammadNashid/ReactFlip.git'/>
        <ProjectItems img={olxImg} title='OLX' githubLink='https://github.com/MuhammadNashid/ReactOLX.git'/>
        <ProjectItems img={bookmyshowImg} title='Book My Show' githubLink='https://github.com/MuhammadNashid/bms.git'/>
        <ProjectItems img={bloodImg} title='Blood Bank' githubLink='https://github.com/MuhammadNashid/expTask.git'/>
        <ProjectItems img={weatherImg} title='Weather' githubLink='https://github.com/MuhammadNashid/weather.git'/>
      </div>
    </div>
  );
};

export default Projects;