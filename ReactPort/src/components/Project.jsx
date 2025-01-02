import React from 'react';
import ProjectItems from './ProjectItems';
import flipcartImg from '../assets/Flip.png';
import instaImg from '../assets/instagram.jpeg';
import olxImg from '../assets/olxi.png';
import bookmyshowImg from '../assets/book.jpg';
import bloodImg from '../assets/blood.jpg';
import weatherImg from '../assets/weather.jpeg';
import backgroundImg from '../assets/pro.jpg';

const Projects = () => {
  return (
    <div 
      id='projects' 
      className='w-full  md:pl-20 p-4 py-16 mb-10'
      style={{
        backgroundImage: `url(${backgroundImg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
      }} >
      <h1 className='text-4xl font-bold text-center text-sky-700'>
        𝑷𝑹𝑶𝑱𝑬𝑪𝑻𝑺
      </h1>
      <p className='text-center py-8 text-gray-200'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Error cumque
        non animi labore incidunt ipsum officia culpa beatae necessitatibus!<br/>
        Nisi praesentium iusto pariatur impedit minus quisquam inventore
        laboriosam sed perferendis.
      </p>
      <div className='pl-[300px] grid sm:grid-cols-2 gap-12 w-[1000px] h-full'>
        <ProjectItems img={instaImg} title='Instagram' githubLink='https://github.com/MuhammadNashid/InstaReact.git'/>
        <ProjectItems img={flipcartImg} title='Flipcart'  githubLink='https://github.com/MuhammadNashid/ReactFlip.git' />
        <ProjectItems img={olxImg} title='OLX' githubLink= 'https://github.com/MuhammadNashid/ReactOLX.git'/>
        <ProjectItems img={bookmyshowImg} title='Book My Show' githubLink='https://github.com/MuhammadNashid/bms.git'/>
        <ProjectItems img={bloodImg} title='Blood Bank' githubLink='https://github.com/MuhammadNashid/expTask.git'/>
        <ProjectItems img={weatherImg} title='Weather'githubLink= 'https://github.com/MuhammadNashid/weather.git'/>
      </div>
    </div>
  );
};

export default Projects;