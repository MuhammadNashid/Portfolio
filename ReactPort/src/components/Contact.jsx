// import React from 'react';


// const Contact = () => {
//   return (
//     <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 '>
//       <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
//       <form
//         action='https://getform.io/f/a405f396-f15e-4495-9d9f-e22c0cf5faf5'
//         method='POST'
//         encType='multipart/form-data'
//       >
//         <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
//           <div className='flex flex-col'>
//             <label className='uppercase text-sm py-2'>Name</label>
//             <input
//               className='border-2 rounded-lg p-3 flex border-gray-300 outline-none' type='text' name='name'/>
//           </div>
//           <div className='flex flex-col'>
//             <label className='uppercase text-sm py-2'>Phone Number</label>
//             <input className='border-2 rounded-lg p-3 flex border-gray-300 outline-none' type='text' name='phone'/>
//           </div>
//         </div>
//         <div className='flex flex-col py-2'>
//           <label className='uppercase text-sm py-2'>Email</label>
//           <input className='border-2 rounded-lg p-3 flex border-gray-300 outline-none' type='email' name='email'/>
//         </div>

//         <div className='flex flex-col py-2'>
//           <label className='uppercase text-sm py-2'>Subject</label>
//           <input
//             className='border-2 rounded-lg p-3 flex border-gray-300 outline-none' type='text' name='subject'
//           />
//         </div>
//         <div className='flex flex-col py-2'>
//           <label className='uppercase text-sm py-2'>Message</label>
//           <textarea className='border-2 rounded-lg p-3 border-gray-300 outline-none' rows='10' name='message'></textarea>
//         </div>
//         <button className='bg-[#001b5e] text-gray-100 mt-4 w-full  p-4 rounded-lg'>
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;

// src/ContactPage.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to backend or show a message)
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your Message"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

