"use client";

import React, { Suspense, useEffect, useState, useCallback,memo  } from "react";
import styled from "styled-components";
import scroll from "../../../../public/scroll.png";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from "@react-three/drei";
import dynamic from 'next/dynamic';
import { textVariant } from '../../../motion/motion'
import CanvasLoader from "../../Loader";
import { SectionWrapper } from "@/app/hoc";

// Dynamic imports without Canvas
const TechGuy = dynamic(() => import("../../models/TechGuy"), { suspense: true });
const Computer = dynamic(() => import("../../models/Computer"), { suspense: true });

const Hero: React.FC = () => {
  const sliderVariant: Variants = {
    initial: { x: "100%" },
    animate: {
      x: "-220%",
      transition: { repeat: Infinity, repeatType: "mirror", duration: 15 }
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: { duration: 2, repeat: Infinity }
    }
  };

  const [TechguyScale, TechguySetScale] = useState(1.3);
  const [computerScale, computerSetScale] = useState(1.1);
  const [TechguyPosition, TechguySetPosition] = useState([0, -2, -1.2]);
  const [computerPosition, computerSetPosition] = useState([0, -0.5, 1.2]);
  const [loader, setLoader] = useState(true);

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

    const timeoutId = window.setTimeout(() => {
      setLoader(false);
    }, 5000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [handleResize]);

  return (
    <HeroContainer>
      <div className="hero-container">
        <div className="hero-image-container">
          <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <OrbitControls enableZoom={false} />
            <Suspense fallback={<CanvasLoader />}>
              <TechGuy
                position={TechguyPosition}
                scale={[TechguyScale, TechguyScale, TechguyScale]}
              />
            </Suspense>
            <Suspense fallback={<CanvasLoader />}>
              <Computer
                position={computerPosition}
                scale={[computerScale, computerScale, computerScale]}
              />
            </Suspense>
            <Environment preset="studio" background={false} resolution={256} />
          </Canvas>
        </div>
        <div className="hero-info">
          <motion.h2 variants={textVariant(0.5)}>TARUN APPARI</motion.h2>
          <motion.h1 variants={textVariant(1)} className="h1">
            Front-End Developer
          </motion.h1>
          <div className="h3-container">
            <motion.h3 className="h3" variants={textVariant(1.5)}>
              Transforming Concepts into
            </motion.h3>
            <motion.h3 className="h3" variants={textVariant(2)}>
              Seamless <span className="h3 gradient-span">User Experiences</span>
            </motion.h3>
          </div>
          <motion.div variants={sliderVariant} animate='scrollButton' className="scroll">
            <a href="#about"> <Image src={scroll} alt="scroll-img" className="scrollImg" /> </a>
          </motion.div>
          {!loader && (
            <motion.div className="slidingText" variants={sliderVariant} initial="initial" animate="animate">
              Front-End React Developer
            </motion.div>
          )}
        </div>
      </div>
    </HeroContainer>
  );
};

export default SectionWrapper(memo (Hero), '#hero');


let HeroContainer = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden !important;
  padding-top: 2rem;

  .hero-container {
    display: grid;
    grid-template-columns: 40% 60%;
    min-width: 100%;
    min-height: 100%;
  }

  .hero-image-container {
    z-index: 9 !important;
    min-height: 100vh;
  }

  .hero-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    min-height: 100vh;
    align-items: center;
    z-index: 3 !important;

    h2 {
      letter-spacing: 1rem;
      color: #3a80e9;
      font-weight: 700;
      font-size: 1.2rem;
    }

    .h1 {
      font-size: 3.3rem;
      font-weight: 700;
    }

    .h3-container {
      z-index: 2;

      .h3 {
        font-size: 1.9rem;
        font-weight: 600;
        color: #949494;
        display: flex;
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
      z-index: 1;
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
    padding-top: 4rem;

    .hero-container {
      display: flex;
      flex-direction: column-reverse;
    }

    .hero-image-container {
      min-height: 50vh;

      canvas {
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
      }
    }
  }

  @media only screen and (max-width: 330px) {
    padding-top: 4rem;

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