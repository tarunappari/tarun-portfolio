"use client";

import React, { useEffect, useState, useCallback, Suspense } from "react";
import styled from "styled-components";
import scroll from "../../../../public/scroll.png";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { textVariant } from '../../../motion/motion';
import { SectionWrapper } from "@/app/hoc";
import gsap from 'gsap';
import myImg from '../../../../public/white-crop.png';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from "@react-three/drei";
import dynamic from 'next/dynamic';
import CanvasLoader from "../../Loader";

const TechGuy = dynamic(() => import("../../models/TechGuy"), { suspense: true });
const Computer = dynamic(() => import("../../models/Computer"), { suspense: true });

const Hero: React.FC = () => {

  const sliderVariant: Variants = {
    initial: {
      x: "100%",
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 15,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  const [loader, setLoader] = useState(true);
  const [TechguyScale, TechguySetScale] = useState(1.3);
  const [computerScale, computerSetScale] = useState(1.1);
  const [TechguyPosition, TechguySetPosition] = useState([0, -2, -1.2]);
  const [computerPosition, computerSetPosition] = useState([0, -0.5, 1.2]);

  // Handle resize and set states accordingly
  const handleResize = useCallback(() => {
    const width = window.innerWidth;

    if (width < 650) {
      TechguySetScale(1.6);
      computerSetScale(1.4);
      TechguySetPosition([0, -1.9, -1.8]);
      computerSetPosition([0, -0.1, 1.5]);
    } else if (width < 910) {
      TechguySetScale(1);
      computerSetScale(0.8);
      TechguySetPosition([0, -1.6, -0.9]);
      computerSetPosition([0, -0.5, 0.9]);
    } else {
      TechguySetScale(1.3);
      computerSetScale(1.1);
      TechguySetPosition([0, -2, -1.2]);
      computerSetPosition([0, -0.5, 1.2]);
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);


  useEffect(() => {
    function startLoader() {
      const counterElement = document.getElementById('counter') as HTMLElement;
      let currentValue = 1; // Start from 1
      const interval = 10; // Increment interval (1-10, 10-20, etc.)
      const totalDuration = 2000; // 2 seconds
      const numberOfIntervals = 10; // Number of intervals to reach 100

      function updateCounter() {
        const remainingTime = totalDuration - (Date.now() - startTime);
        const timePerInterval = remainingTime / numberOfIntervals;
        const increment = Math.floor(Math.random() * interval) + 1;

        if (currentValue >= 100) {
          counterElement.textContent = '100';
          return;
        }

        // Increment by a fixed interval within the current range
        currentValue += increment;

        // Make sure currentValue does not exceed the next interval's upper limit
        if (currentValue > Math.ceil(currentValue / 10) * 10) {
          currentValue = Math.ceil(currentValue / 10) * 10;
        }

        counterElement.textContent = currentValue.toString();

        if (Date.now() - startTime < totalDuration) {
          setTimeout(updateCounter, timePerInterval);
        } else {
          counterElement.textContent = '100'; // Ensure it ends at 100
        }
      }

      const startTime = Date.now();
      updateCounter();
    }

    startLoader();

    // Timer to hide preloader after 2 seconds
    const timer = setTimeout(() => {
      gsap.to('.counter', {
        duration: 1.25,
        opacity: 0,
      });

      gsap.to('.bar', {
        duration: 2.5,
        height: 0,
        stagger: {
          amount: 0.5,
        },
        ease: 'power4.inOut',
      });

      gsap.from('.text-element', {
        duration: 2.5,
        y: 700,
        stagger: {
          amount: 0.5,
        },
        ease: 'power4.inOut',
        onComplete: () => {
          setLoader(false); // Hide preloader
        },
      });
    }, 2000);


    const timeoutId = window.setTimeout(() => {
      setLoader(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timeoutId);
    }
  }, []);


  return (
    <HeroContainer>
      {loader && (
        <div className="preloader">
          <h1 className='counter' id="counter">0</h1>
          <div className='overlay'>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
          </div>
        </div>
      )}
      <div className="hero-container">
        <div className="hero-image-container text-element">
        <Canvas>
            <ambientLight intensity={0.5} />
            <OrbitControls enableZoom={false} />
            <Suspense fallback={<CanvasLoader />}>
              <TechGuy position={TechguyPosition} scale={[TechguyScale, TechguyScale, TechguyScale]} />
              <Computer position={computerPosition} scale={[computerScale, computerScale, computerScale]} />
            </Suspense>
            <Environment preset="studio" background={false} resolution={256} />
          </Canvas>
          {/* <Image src={ myImg } alt="myImg" className="my-img" /> */}
        </div>
        <div
          className="hero-info text"
        >
          <motion.h2 className="text-element" variants={textVariant(0.5)}>TARUN APPARI</motion.h2>
          <motion.h1 variants={textVariant(1)} className="h1 text-element">
            Front-End Developer
          </motion.h1>
          <div className="h3-container">
            <motion.h3 className="h3 text-element" variants={textVariant(1.5)}>
              Transforming Concepts into
            </motion.h3>
            <motion.h3 className="h3 text-element" variants={textVariant(2)}>
              Seamless <span className="h3 gradient-span">User Experiences</span>
            </motion.h3>
          </div>
          <motion.div
            variants={sliderVariant}
            animate='scrollButton'
            className="scroll text-element"
          >
            <a href="#about"> <Image src={scroll} alt="scroll-img" className="scrollImg" /></a>
          </motion.div>
          {
            !loader &&
            <motion.div
              className="slidingText"
              variants={sliderVariant}
              initial="initial"
              animate="animate"
            >
              Front-End React Developer
            </motion.div>
          }
        </div>
      </div>
    </HeroContainer>
  );
};

export default SectionWrapper(Hero, '#hero');


let HeroContainer = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden !important;
  padding-top: 2rem;

  .overlay{
    position: fixed;
    width: 100vw;
    height: 115vh;
    top: -1rem;
    z-index: 99 !important;
    display: flex;
}

.bar{
    width: 10vw;
    height: 120vh;
    background: #1a1a1a;
    z-index: 999 !important;
}

.counter{
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    z-index: 150;
    font-weight: 800;
    color: #bcbcc4;
    padding: 0.2em 0.4em;
    font-size: 15vw;
}

  .hero-container {
    display: grid;
    grid-template-columns: 40% 60%;
    min-width: 100%;
    min-height: 100%;
  }

  .hero-image-container {
    z-index: 9 !important;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100vh;


    .my-img{
      width: 25rem;
      margin-top: -5rem;
      padding-left: 2rem;
    }
  }

  .hero-image-container:active{
    cursor: grabbing;
  }

  .hero-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    min-height: 100vh;
    align-items: center;
    z-index: 3 !important;
    position: relative;

    h2 {
      letter-spacing: 1rem;
      color: #3a80e9;
      font-weight: 700;
      font-size: 1.2rem;
      position: relative;
    }

    .h1 {
      font-size: 3.3rem;
      font-weight: 700;
      position: relative;
    }

    .h3-container {
      z-index: 2;
      position: relative;

      .h3 {
        font-size: 1.9rem;
        font-weight: 600;
        color: #949494;
        display: flex;
        position: relative;
      }

      .gradient-span {
        display: flex;
        background: linear-gradient(90deg, rgba(2, 0, 36, 1) -30%, rgba(31, 83, 198, 1) 30%, rgba(0, 212, 255, 1) 100%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        display: inline-block;
      }
    }

    .scroll {
      padding: 1rem;
      z-index: 5 !important;
    }

    .scrollImg {
      width: 2rem;
    }

    .slidingText {
      position: absolute;
      bottom: 0.5rem;
      font-size: 35vh;
      white-space: nowrap;
      color: rgb(25, 25, 25);
      width: 50vw;
      font-weight: 500;
      z-index: -3;
    }
  }

  @media only screen and (max-width: 910px) {
    .hero-info {
      gap: 1rem;
      min-height: 100vh;

      h2 {
        font-weight: 700;
        font-size: 0.9rem;
        letter-spacing: 0.5rem;
      }

      .h1 {
        font-size: 2.2rem;
        font-weight: 700;
      }

      .h3-container {
        .h3 {
          font-size: 1.4rem;
          font-weight: 600;
        }
      }
    }
  }

  @media only screen and (max-width: 650px) {
    padding-top: 2rem;

    .counter{
      bottom: 2rem;
    }

    .hero-container {
      display: flex;
      flex-direction: column-reverse;
    }

    .hero-image-container {
      min-height: 50vh;

      .my-img{
      width: 15rem;
      margin-top: -1rem;
      margin-left: -2rem;
    }

      canvas{
        min-height: 50vh !important;
      }
      
    }

    .hero-info {
      gap: 0.4rem;
      min-height: 35vh;

      h2 {
        font-weight: 700;
        font-size: 0.8rem;
        letter-spacing: 0.4rem;
      }

      .h1 {
        font-size: 2rem;
        font-weight: 600;
      }

      .h3-container {
        .h3 {
          font-size: 1rem;
          font-weight: 600;
        }
      }

      .scrollImg {
        width: 1.6rem;
      }

      .slidingText {
        width: 150vw;
        bottom: -18rem;
      }
    }
  }

  @media only screen and (max-width: 330px) {
    padding-top: 1rem;

    .hero-info {
      gap: 0.4rem;
      min-height: 35vh;

      h2 {
        font-weight: 700;
        font-size: 0.8rem;
        letter-spacing: 0.4rem;
      }

      .h1 {
        font-size: 1.5rem;
        font-weight: 600;
      }

      .h3-container {
        .h3 {
          font-size: 0.75rem;
          font-weight: 600;
        }
      }
    }
  }
`;
