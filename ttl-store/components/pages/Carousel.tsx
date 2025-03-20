'use client';

import { cn } from '@/utils';
import React, { useState } from 'react';
import { motion, Variants } from 'motion/react';
import { Button, ServiceCard } from '@/components/UI';
import { SERVICES_INFO } from '@/constants';
import { useWindowSize } from '@/hooks';

const WINDOW_SIZES = {
  "mobile": 640,
  "tablet": 768,
  "desktop": 1200,
}

const Carousel = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);
  const nextSlide = () => {
    setPositionIndexes((prevIndexes) => prevIndexes.map((index) => (index + 1) % positionIndexes.length));

  };
  const { width, height } = useWindowSize();

  const prevSlide = () => {
    setPositionIndexes((prevIndexes) =>
      prevIndexes.map((index) => (index - 1 + positionIndexes.length) % positionIndexes.length)
    );
  };

  const positions = ['left', 'center', 'right'];

  const variants = (width: number): Variants => {
    if (width < WINDOW_SIZES.mobile) {
      return {
        left: { display: 'none' },
        center: { x: '0%', scale: 1, zIndex: 1 },
        right: { display: 'none' },
      };
    }
    else if (width < WINDOW_SIZES.desktop) {
      return {
        left: { x: '-50%', scale: 0.75, zIndex: 1 },
        center: { x: '0%', scale: 1, zIndex: 2 },
        right: { x: '50%', scale: 0.75, zIndex: 1 },
      };
    }
    return {
      left: { x: '-100%', y: '25%', scale: 0.75, zIndex: 1 },
      center: { x: '0%', scale: 1, zIndex: 1 },
      right: { x: '100%', y: '25%', scale: 0.75, zIndex: 1 },
    };
  };

  return (
    <div className="flex justify-between items-start mt-52 desktop:mt-20 min-h-[40vh]">
      <Button onClick={prevSlide}
        className="border-2 border-gray-900 w-12 aspect-square rounded-full desktop:self-center -translate-x-8 mobile:scale-75">❮</Button>

      <div className="flex mobile:flex-col  justify-center items-center">
        {SERVICES_INFO.map((service, index) => (
          <motion.div
            initial="center"
            animate={positions[positionIndexes[index]]}
            variants={variants(width) as Variants}
            transition={{ duration: 0.5 }}

            key={index} className={cn("desktop:h-32 absolute desktop:w-[25rem] tablet:w-[25rem] w-[70%]")}>
            <ServiceCard
              cardBackgroundImage={service.cardBackgroundImage}
              serviceName={service.name}
              serviceDescription={service.description}
              imageUrl={service.imageUrl}
            />
          </motion.div>
        ))}
      </div>

      <Button onClick={nextSlide} className="border-2 border-gray-900 w-12 mobile:scale-75 aspect-square rounded-full desktop:self-center translate-x-8">❯</Button>
    </div>
  );
};

export default Carousel;