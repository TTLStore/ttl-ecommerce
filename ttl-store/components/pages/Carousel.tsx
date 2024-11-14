'use client';

import { cn } from '@/utils';
import React, { useState } from 'react';

const images = [
  'image - 1',
  'image - 2',
  'image - 3',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageList, setImageList] = useState(images);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    // swap the image position
    setImageList([imageList[2], ...imageList.slice(0, 2)]);

  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel grid grid-cols-5 transition gap-x-20">
      <button onClick={prevSlide}>❮</button>
      {imageList.map((image, index) => (
        <div key={index} className={cn("h-28 outline duration-300 transition hover:scale-105 active", index === 1 ? 'scale-105' : '')}>
          <span>{image}</span>
        </div>
      ))}
      <button onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Carousel;