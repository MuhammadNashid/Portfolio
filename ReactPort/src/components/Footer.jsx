import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer= () => {
  return (
    <footer className="bg-gray-700 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 
            md:grid-cols-4 gap-8 w-11/12">

        <div className="flex items-center">
          <h1 className="text-2xl font-bold">𝐌𝐘 𝐏𝐑𝐎𝐓𝐅𝐎𝐋𝐈𝐎</h1>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contacts</h3>
          <p>Phone: +91 8075334493</p>
          <p>Email: muhammadnashid905@gmail.com</p>
          <p>Address: Wayanad</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Social Media</h3>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank"
              rel="noopener noreferrer">
              <FaFacebook className="text-white text-2xl 
                            hover:text-gray-300" />
            </a>
            <a href="https://twitter.com" target="_blank"
              rel="noopener noreferrer">
              <FaTwitter className="text-white text-2xl
                            hover:text-gray-300" />
            </a>
            <a href="https://instagram.com" target="_blank"
              rel="noopener noreferrer">
              <FaInstagram className="text-white text-2xl
                            hover:text-gray-300" />
            </a>
            <a href="https://linkedin.com" target="_blank"
              rel="noopener noreferrer">
              <FaLinkedin className="text-white text-2xl
                            hover:text-gray-300" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul>
            <li><a href="#" className="hover:underline">
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