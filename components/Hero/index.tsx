"use client"
import React, { useEffect, useMemo, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Image from 'next/image'

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

const courses = [
  {
    imageUrl: "images/hero/course-1.svg",
    courseTitle: "Introduction to Programming with Python",
    price: "Free"
  },
  {
    imageUrl: "images/hero/course-7.svg",
    courseTitle: "Logo Design Workshop",
    price: "Free"
  },
  {
    imageUrl: "images/hero/course-6.svg",
    courseTitle: "Blockchain and Smart Contracts",
    price: "Free"
  },
]

const Course = ({ imageUrl, courseTitle, price }) => {

  return (

    <div className="inline-block w-full bg-white border border-gray-200 rounded-sm shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <Image width={400} height={400} className="p-8 rounded-t-lg items-center flex justify-center mx-auto h-[400px]" src={imageUrl} alt="product image" />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{courseTitle}</h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">{price}</span>
          <a href="#" style={{ background: "#2BAFFC" }} className="ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-primary px-3 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-3 lg:px-6 xl:px-9">Enroll</a>
        </div>
      </div>
    </div>

  )

}
const Hero = () => {
  const [init, setInit] = useState(false);
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      console.log("Loading")
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container: Container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({

      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },

      },
      particles: {
        color: {
          value: "#2BAFFC",
        },
        links: {
          color: "#2BAFFC",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 100,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <section
        id="home"
        className="dark:bg-gray-dark h-screen relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[150px]"
      >
        {/* {init && (
          <Particles
            id="tsparticles"
            // particlesLoaded={particlesLoaded}
            options={options}
          />
        )} */}

        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[1368px]"
                data-wow-delay=".2s"
              >
                <div className="flex mt-10 items-center w-full space-between ">
                  <div className="w-1/2">
                    <h1 style={{ fontFamily: 'Poppins', fontSize: "80px" }} className=" text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                      Learn. Grow. <br /> Elevate.
                    </h1>

                    <h2 style={{ fontFamily: 'Poppins', fontSize: "29px" }} className="w-full dark:text-body-color-dark mb-12 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
                      Inspire, Empower, and Achieve.
                    </h2>

                    <div className="flex">
                      <PhoneInput
                        inputStyle={
                          {
                            fontFamily: "Poppins",
                            padding: "1.5rem",
                            width: "350px",
                            height: "70px",
                            fontSize: "18px",
                            outline: "0"
                          }
                        }
                        countrySelectorStyleProps={
                          {

                            buttonStyle:
                            {
                              padding: "1.5rem",
                              height: "70px"
                            }
                          }
                        }

                        defaultCountry="et"
                        value={phone}
                        onChange={(phone) => setPhone(phone)}
                      />
                      <div style={{ position: "relative", height: "70px" }}>
                        <button
                          style={{ background: "#2BAFFC", height: "48px", width: "132px", verticalAlign: "middle" }}
                          className="absolute top-3 right-4 my-auto ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-primary px-3 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-3 lg:px-3 xl:px-3"
                        >
                          Start Now
                        </button>
                      </div>

                    </div>

                  </div>


                  <div className="my-auto lg:block hidden overflow-hidden w-1/2">
                    <div
                      className="slideshowSlider pb-7"
                      style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                    >
                      {courses.map(({ imageUrl, courseTitle, price }, index) => (
                        <Course key={index} courseTitle={courseTitle} price={price} imageUrl={imageUrl} />
                      ))}
                    </div>

                    <div className="slideshowDots">
                      {courses.map((_, idx) => (
                        <div
                          key={idx}
                          className={`slideshowDot${index === idx ? " active" : ""}`}
                          onClick={() => {
                            setIndex(idx);
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div >
          </div >
        </div >
      </section >

    </>
  );
};

export default Hero;
