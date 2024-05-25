"use client"
import { useState } from 'react';
import { toast } from 'react-toastify';

const Contact = ()=>{
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     console.log(formData);
    
     const re = /\S+@\S+\.\S+/;
     const ans =  re.test(formData.email);
     if(ans){
       toast.success("Information saved successfully")
     }
     else{
      toast.error("Enter valid email")
     }
  };

  return (
    <section id='contact'>
    <form onSubmit={handleSubmit} className="w-[60%] mx-auto mt-10 mb-8">
    <div className="mb-4">
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="mt-1 p-2 border-2 border-amber-500  rounded-md w-full"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="mt-1 p-2 border-2 border-amber-500 rounded-md w-full"
      />
    </div>
    <div className="mb-6">
      <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        rows="4"
        className="mt-1 p-2 border-2 border-amber-500 rounded-md w-full"
      />
    </div>
    <button type="submit" className="bg-slate-900 text-white font-semibold px-4 py-2 rounded-md hover:bg-slate-700">Submit</button>
  </form>
  </section>
  );
};



export default Contact