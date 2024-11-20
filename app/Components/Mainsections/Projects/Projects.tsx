"use client"
import React from 'react';
import { projects } from '../../../../public/data';
import { CardContainer, CardBody, CardItem } from '../../ui/3d-card'; // Adjust the import path as needed
import Image from 'next/image';
import styled from 'styled-components';
import { motion } from "framer-motion";
import { SectionWrapper } from '../../../hoc/index'
import { slideIn, textVariant } from '../../../motion/motion'

const Projects = () => {


  return (
    <ProjectsMainContainer className="main-container" >
      <div className='featured-container'>
        <h1>
          Featured <span className='span-gradient'>Works</span>
        </h1>
      </div>
      <ProjectContainer className="projects-container">
        {projects.map((project) => (
          <CardContainer key={project.id} className="card-container" num={project.id}>
            <CardBody className="card-body">
              <CardItem className="card-item" translateZ={50}>
                <h2>{project.title}</h2>
                <p>{project.des}</p>
              </CardItem>
              <CardItem className="card-item" translateZ={90}>
                <Image src={project.img} className='project-img' alt={project.title} width={450} height={450} />
              </CardItem>
              <CardItem className="card-item icons-btn-div" translateZ={40}>
                <div className="icon-list">
                  {project.iconLists.map((icon, index) => (
                    <Image key={index} src={icon} alt={'icon-img'} width={20} height={20} />
                  ))}
                </div>
                <a href={project.link} className='btn' target="_blank" rel="noopener noreferrer">
                  <div className="live-button">
                    <button className="px-7 py-1.5 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
                      <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                      <span className="relative z-20">Live Site</span>
                    </button>
                  </div>
                </a>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </ProjectContainer>
    </ProjectsMainContainer>
  );
};

export default SectionWrapper(Projects, 'projects');


let ProjectsMainContainer = styled.div`
      margin-top: -2rem;
      overflow: hidden !important;
     .featured-container{
      min-width: 100%;
      text-align: center;
      margin-top: 5rem;
      h1{
        font-size: 3rem;
        font-weight: 800;
      }
    }

    @media only screen and (max-width:780px){
      .featured-container{
        h1{
        font-size: 2rem;
      }
      }
    }

    @media only screen and (max-width:480px){
      .featured-container{
        h1{
        font-size: 1.5rem;
      }
      }
    }
`

let ProjectContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    .card-container{
      border: 0.05rem solid grey;
      border-radius: 1rem;
      box-shadow: 2px 2px 5px #3d3d3d;
      padding: 0.6rem;
            background: linear-gradient(
                90deg,
                #000002 10%,
                #1f1f21 70%,
                #000005 100%
            );

            background-size: 400% 400%;
            animation: gradient 8s ease infinite;
            min-width: 32vw;
      .card-body{
        display: flex ;
      flex-direction: column ;
      justify-content: space-between;
      cursor: pointer;
      }

      .card-item{
        h2{
          font-size: 1.3rem;
          font-weight: 600;
          padding-bottom: 0.5rem;
        }
        p{
          font-size: 0.8rem;
          font-weight: 400;
          color: #7a7a7a;
        }
        .project-img{
          border-radius: 1rem;
          margin-top: -1rem;
        }
      }
      
      .icons-btn-div{
        display: flex;
        justify-content: space-between;
        min-width: 100%;
        .icon-list{
        display: flex;
        flex-direction: row;
        gap: 0.3rem;
      }

      .btn{
        font-size: 0.8rem;
      }
      }
  }

  @media only screen and (max-width:790px){
    display: flex !important;
    flex-direction: column !important;
  }

  @media only screen and (max-width:490px){
    .card-container{
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }
  }

`