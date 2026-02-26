import React from 'react';
import { Button } from './ui/button';
import { RiShoppingBag2Fill } from "react-icons/ri";

const Hero = () => {
  return (
    <div className='mb-[100px]'>
      <div className="hero min-h-[80vh] custom-img bg-fixed bg-center">
        <div className="hero-overlay bg-opacity-70" />
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-white scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Jaay&apos;s <span className='text-myorange'>Attire</span> </h1>
            <p className="mb-5  text-white"> Welcome to Jaay&apos;s Attire, where fashion meets sophistication, each piece reflecting the perfect harmony of innovation and classic allure.</p>
            <Button className='outline outline-offset-2 outline-1 bg-transparent group hover:bg-transparent hover:rounded-3xl duration-300 hover:outline-myorange' > 
            <RiShoppingBag2Fill  className="mr-2 h-5 w-6 group-hover:text-myorange group-hover:animate-bounce" /> Shop now
    </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
