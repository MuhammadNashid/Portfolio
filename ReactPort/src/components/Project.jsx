import React from 'react';
import ProjectItems from './ProjectItems';
import flipcartImg from '../assets/flip.png';
import instaImg from '../assets/insta.jpg';
import olxImg from '../assets/olx.png';
import bookmyshowImg from '../assets/book.jpg';
import bloodImg from '../assets/blood.webp'
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
        <ProjectItems img={instaImg} title='Insatgram'/>
        <ProjectItems img={flipcartImg} title='Flipcart'/>
        <ProjectItems img={olxImg} title='OLX' />
        <ProjectItems img={bookmyshowImg} title='Book My Show'/>
        <ProjectItems img={bloodImg} title='Blood Bank'/>
        <ProjectItems img={weatherImg} title='Weather'/>
      </div>
    </div>
  );
};

export default Projects;