import React, { Suspense, useEffect, useState, useCallback, memo } from "react";
import styled from 'styled-components';
import { SectionWrapper } from '@/app/hoc';
import { motion, Variants } from 'framer-motion'
import { fadeIn, slideIn } from "../../../motion/motion";
import { ContactForm } from './ContactForm';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from "@react-three/drei";
import dynamic from 'next/dynamic';

const TechGuy = dynamic(() => import("../../models/TechGuy"), { suspense: true });
const Computer = dynamic(() => import("../../models/Computer"), { suspense: true });


const Contact: React.FC = () => {

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
      TechguySetPosition([0, -2.3, -1.8]);
      computerSetPosition([0, -0.5, 1.5]);
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

  return (
    <ContactContainer>
      <motion.div variants={fadeIn('right', 'tween', 1, 1)} className='form-container xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <ContactForm />
      </motion.div>
      <motion.div variants={fadeIn('left', 'tween', 1, 1)} className='globe-continer xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <Canvas>
          <ambientLight intensity={-1} />
          <OrbitControls enableZoom={false} />
          <Suspense fallback={null}>
            <TechGuy position={TechguyPosition} scale={[TechguyScale, TechguyScale, TechguyScale]} />
            <Computer position={computerPosition} scale={[computerScale, computerScale, computerScale]} />
          </Suspense>
          <Environment preset="studio" background={false} resolution={256} />
        </Canvas>
      </motion.div>
    </ContactContainer>
  )
}

export default SectionWrapper(memo(Contact), '');

let ContactContainer = styled.div`
    position: relative;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden !important;
    .form-container,.globe-continer{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
    }
    .globe-continer:active{
      cursor: grabbing;
    }

    @media only screen and (max-width:650px){
      display: flex;
      flex-direction: column;
    }
`