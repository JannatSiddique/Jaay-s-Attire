import Link from 'next/link';
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { NavigationMenuDemoNavigationMenuDemo } from '../navlinks';
const Navbar = () => {
  return (
    <div>
        <div className="navbar bg-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="mr-2 text-black lg:hidden">
        <GiHamburgerMenu/>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 text-black  bg-white">
      <li tabIndex={0}>
          <details>
         <summary className='font-semibold'>Mens</summary>
        <ul className="p-2">
            <li><Link href={"/Tuxedo"}>Tuxedo</Link></li>
            <li><Link href={"/Kurta Pajama"}>Kurta Pajama</Link></li>
            <li><Link href={"/Winter Bear"}>Winter Bear</Link></li>
            <li><Link href={"/Casual Shirts"}>Casual Shirts</Link></li>
            </ul>
          </details></li>

          <li tabIndex={0}>
          <details>
         <summary  className='font-semibold'>Womens</summary>
        <ul className="p-2">
            <li><Link href={"/Tops"}>Tops</Link></li>
            <li><Link href={"/Maxi"}>Maxi</Link></li>
            <li><Link href={"/Jumpsuit"}>Jumpsuit</Link></li>
            <li><Link href={"/Eastern"}>Eastern</Link></li>
          </ul>
          </details></li>
        
        <li tabIndex={0}>
          <details>
         <summary  className='font-semibold'>Footwear</summary>
          <ul className="p-2">
            <li><Link href={"/Mens"}>Mens</Link></li>
            <li><Link href={"/Womens"}>Womens</Link></li>
          </ul>
          </details>
        </li>
      
      </ul>
    </div>
    <a className="text-xl italic text-black font-semibold">Jaay&apos;s</a>
  </div>
  <div className="navbar-center ">
    <div className='hidden lg:flex '>
    <NavigationMenuDemoNavigationMenuDemo/>
    </div>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="cursor-pointer group ">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-black group-hover:text-myorange duration-300 font-semibold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm font-semibold text-white group-hover:bg-myorange indicator-item">8</span>
        </div>
      </div>  
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">     
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">                                                                                                                                                                                                               
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
      </div>
  </div>
</div>
    </div>
  )
}

export default Navbar