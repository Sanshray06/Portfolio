
import { useState } from 'react';
import {logo , close , menu} from '../assets';

const Navbar = ({projectsRef ,statsRef , moreRef}) => {
    const [toggle ,  setToggle] = useState(false);

    const handleScroll = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
        setToggle(false); // Close the menu after clicking
      };
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
        <img src={logo} alt="logo" className='w-[100px] h-[100px]'/>

        <ul className='list-none sm:flex hidden justify-end items-center fles-1 z-10'>
            <li className='font-poppins font-normal cursor-pointer text-[16px] text-white mr-10'>Home</li>
            <li className='font-poppins font-normal cursor-pointer text-[16px] text-white mr-10' onClick={()=>handleScroll(statsRef)}>Features</li>
            <li className='font-poppins font-normal cursor-pointer text-[16px] text-white mr-10' onClick={() => handleScroll(projectsRef)}>Projects</li>
            <li className='font-poppins font-normal cursor-pointer text-[16px] text-white' onClick={()=>handleScroll(moreRef)}>More Info</li>
            
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img src={toggle ? close : menu } alt="" className='w-[28px] h-[28px] object-contain' onClick={() => setToggle((prev) =>!prev)} />
            <div className={`${toggle ? 'flex':'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-5 min-w-[140px] rounded-xl sidebar`}>
                <ul className='list-none flex-col justify-end items-center fles-1'>
                    <li className='font-poppins font-normal cursor-pointer text-[16px] text-white mb-4'>home</li>
                    <li className='font-poppins font-normal cursor-pointer text-[16px] text-white mb-4'onClick={()=>handleScroll(statsRef)} >features</li>
                    <li className='font-poppins font-normal cursor-pointer text-[16px] text-white mb-4' onClick={() => handleScroll(projectsRef)}>projects</li>
                    <li className='font-poppins font-normal cursor-pointer text-[16px] text-white mb-4'  onClick={()=>handleScroll(moreRef)}>more Info</li>
                    
                </ul>
            </div>
        </div>

    </nav>
  )
}

export default Navbar
