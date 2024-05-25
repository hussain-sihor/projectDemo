"use client"
import Image from "next/image"
import logo from "../public/logo.png"
import Link from 'next/link'

const Header = ()=>{

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
    
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return(
    <nav
    className=" fixed bg-white py-4 px-4  items-center flex w-full shadow-lg text-slate-800 z-40
max-sm:px-0 
max-sm:shadow-sm
max-sm:w-full
max-sm:items-center"
  >
    <div
      className="mx-3 flex justify-start items-center w-16 h-10
    max-sm:w-6
    max-sm:h-4"
    >
      <Image src={logo} alt="" />
    </div>

    <div className="w-full">
      <ul
        className="flex justify-center items-center text-xl gap-11 font-semibold font-mono 
  max-sm:text-sm 
  max-sm:gap-2
  max-sm:font-light
  max-sm:justify-center"
      >
        <li className="">
          <Link href="/" >Home</Link>
        </li>
        <li className="">
          <Link href="/" onClick={() => scrollToSection('about')}>About</Link>
        </li>
        <li className="">
          <Link href="/" onClick={() => scrollToSection('projects')}>Project</Link>
        </li>
        <li className="">
          <Link href="/" onClick={() => scrollToSection('contact')} >Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
  )
}


export default Header