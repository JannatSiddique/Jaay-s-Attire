import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { FaShoppingCart } from 'react-icons/fa';
import { RiShoppingBag2Fill } from 'react-icons/ri';
import BestSellingCard from './bestSellingCard';

const BestSelling = () => {
  const bestsell = [
    {
      src: '/pics/whitetee.avif',
      alt: 'whitetee',
      title: 'White Tee',
      description: 'A high-quality white tee shirt.',
      price: 150,
    },
    {
      src: '/pics/whitetee.avif',
      alt: 'whitetee',
      title: 'White Tee',
      description: 'Quality',
      price: 150,
    },
    {
      src: '/pics/whitetee.avif',
      alt: 'whitetee',
      title: 'White Tee',
      description: 'Quality',
      price: 150,
    },
    {
      src: '/pics/whitetee.avif',
      alt: 'whitetee',
      title: 'White Tee',
      description: 'Quality',
      price: 150,
    },
  ];

  return (
    <div className="mb-[100px] mt-[80px]">
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl text-black">
          Best Selling Product
        </h1>
        <div className="flex mt-2 mb-10 justify-center">
          <div className="w-[100px] h-1 rounded-full bg-myorange inline-flex" />
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {bestsell.map((items, i) => (
            <BestSellingCard
              key={i}
              src={items.src}
              alt={items.alt}
              title={items.title}
              description={items.description}
              price={items.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
