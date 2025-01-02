import React from 'react';
import { useTrail, animated } from '@react-spring/web'; // Import react-spring hooks
import ProjectItems from './ProjectItems';
import flipcartImg from '../assets/Flip.png';
import instaImg from '../assets/instagram.jpeg';
import olxImg from '../assets/olxi.png';
import bookmyshowImg from '../assets/book.jpg';
import bloodImg from '../assets/blood.jpg';
import weatherImg from '../assets/weather.jpeg';

const Projects = () => {
  const projects = [
    { img: instaImg, title: 'Instagram', githubLink: 'https://github.com/MuhammadNashid/InstaReact.git' },
    { img: flipcartImg, title: 'Flipcart', githubLink: 'https://github.com/MuhammadNashid/ReactFlip.git' },
    { img: olxImg, title: 'OLX', githubLink: 'https://github.com/MuhammadNashid/ReactOLX.git' },
    { img: bookmyshowImg, title: 'Book My Show', githubLink: 'https://github.com/MuhammadNashid/bms.git' },
    { img: bloodImg, title: 'Blood Bank', githubLink: 'https://github.com/MuhammadNashid/expTask.git' },
    { img: weatherImg, title: 'Weather', githubLink: 'https://github.com/MuhammadNashid/weather.git' },
  ];

  // Create an animated trail for each project
  const trail = useTrail(projects.length, {
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: { tension: 100, friction: 12 },
  });

  return (
    <div id='projects' className='max-w-[1080px] m-auto p-4 py-16'>
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
        {trail.map((style, index) => (
          <animated.div key={index} style={style}>
            <ProjectItems
              img={projects[index].img}
              title={projects[index].title}
              githubLink={projects[index].githubLink}
            />
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;