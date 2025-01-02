import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer= () => {
  return (
    <footer className="bg-gray-700 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 
            md:grid-cols-4 gap-8 w-11/12">

        <div className="flex items-center">
          <h1 className="text-2xl font-bold animate-bounce">𝐌𝐘 𝐏𝐑𝐎𝐓𝐅𝐎𝐋𝐈𝐎</h1>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 animate-bounce">Contacts</h3>
          <p>Phone: +91 8075334493</p>
          <p>Email: muhammadnashid905@gmail.com</p>
          <p>Address: Wayanad</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 animate-bounce">Services</h3>
          <ul>
            <li><a href="#" className="hover:underline animate-">
              Web Development</a></li>
            <li><a href="#" className="hover:underline">
              Web Designer</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer