import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { FaShoppingCart } from "react-icons/fa";
import { RiShoppingBag2Fill } from "react-icons/ri";

const BestSellingCard = ({
    src ,
    alt,
    title ,
    description ,
    price ,
}:{
    src : string,
    alt: string,
    title: string ,
    description: string ,
    price : number,
}) => {
  return (
    <div className="w-[280px] h-[30rem] p-4 mx-auto shadow-md rounded-xl relative group">
    <div className='block h-[20rem] rounded overflow-hidden'>
      <Image 
      alt="maxi" 
      width={250} 
      height={150} 
      src={src} />
    </div>
    <div className=" mt-1">
       {title && (<h2 className="card-title  scroll-m-20  text-lg font-semibold tracking-tight first:mt-0 text-black">{title}</h2>)}
      {description && ( <p className=" scroll-m-20 text-left text-sm font-semibold tracking-tight">{description}</p>)}
     {price && ( <p className=" scroll-m-20 text-left text-base font-semibold tracking-tight text-black">${price}</p>)}
      </div>
      <div>
        <Button className='text-black bg-transparent hover:bg-tranparent shadow-lg scroll-m-20 mt-2 text-xs font-semibold tracking-tigh rounded-xl absolute bottom-2 right-2'> <FaShoppingCart className="m-2 h-4 w-4 group-hover:text-myorange duration-300" /> Add to cart</Button>
        <Button className='text-black bg-transparent hover:bg-tranparent shadow-lg scroll-m-20 mt-2 text-xs font-semibold tracking-tigh rounded-xl absolute bottom-2 left-2'> <RiShoppingBag2Fill className="m-2 h-4 w-4 group-hover:text-myorange duration-300" /> Buy now</Button>
      </div>
    </div>
     





 
    )
  }
  
export default BestSellingCard


       
