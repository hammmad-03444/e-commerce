'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const banners = [
  { src: '/Frame 560.png', alt: 'iPhone Offer' },
  { src: '/Frame 560.png', alt: 'Summer Sale' },
];

export default function Banner() {
  return (
    <div className="w-full">
      <Swiper autoplay={{ delay: 3000 }} loop>
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <img
              src={banner.src}
              alt={banner.alt}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
