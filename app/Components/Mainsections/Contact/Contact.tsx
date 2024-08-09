import React, { Suspense, useEffect, useState, useCallback,memo  } from "react";
import styled from 'styled-components';
import { SectionWrapper } from '@/app/hoc';
import { ContactForm } from './ContactForm';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from "@react-three/drei";
import dynamic from 'next/dynamic';
import EarthCanvas from "./Earth";

const TechGuy = dynamic(() => import("../../models/TechGuy"), { suspense: true });
const Computer = dynamic(() => import("../../models/Computer"), { suspense: true });


const Contact : React.FC = () => {

  return (
    <ContactContainer>
      <div className='form-container xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <ContactForm />
      </div>
      <div className='globe-continer xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </div>
    </ContactContainer>
  )
}

export default SectionWrapper(memo(Contact),'');

let ContactContainer = styled.div`
    position: relative;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
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
      grid-template-columns: 1fr !important;
    }
`