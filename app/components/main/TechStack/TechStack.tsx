"use client";

import React from "react";
import styles from "./TechStack.module.scss";
import { tech_stack } from "../../../data/data";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TechStack = () => {
  SwiperCore.use([Navigation, Autoplay]);

  return (
    <div className={styles.techslider}>
      <h3>Tools and Technologies</h3>
      <div className={styles.swiperslider}>
        <Swiper
          breakpoints={{
            1080: {
              slidesPerView: 6,
            },

            600: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={50}
          autoplay={{
            delay: 1500,
          }}
          className='mySwiper'
        >
          {tech_stack.map((tech) => {
            return (
              <>
                <SwiperSlide key={tech.id}>
                  <Image
                    src={tech.image_url}
                    alt={tech.alt}
                    width={60}
                    height={60}
                    className={styles.logoimages}
                  />
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default TechStack;
