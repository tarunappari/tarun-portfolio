"use client"

import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription } from '../../ui/TextRevealCard';
import { SectionWrapper } from '@/app/hoc';

const Experience = () => {

    return (
        <ExperienceContainer>
            <div className='exp-title'>
                <h1>My <span className='span-gradient'>Work Experience</span></h1>
            </div>
            <div className='exp-card-container'>
                <div className='exp-card' >
                    <TextRevealCard
                        text="Front-End Developer"
                        revealText="at DeepThought"
                        className='exp-info-container'
                    >
                        <div className='exp-info'>
                            <TextRevealCardTitle className='info-text'>
                                Front-End Developer Intern
                            </TextRevealCardTitle>
                            <TextRevealCardDescription className='info-para'>
                                At DeepThought, Built scalable React components with API integrations, managed state with Hooks and Redux, and created a responsive web app. Used Git for version control and improved leadership skills through specialized sessions.
                            </TextRevealCardDescription>
                        </div>
                    </TextRevealCard>
                </div>
            </div>
        </ExperienceContainer>
    )
}

export default SectionWrapper(Experience , '');

const ExperienceContainer = styled.div`
    min-height: 100vh;

    .exp-title {
        padding: 0.5rem;
        text-align: center;
        
        h1 {
            font-size: 3rem;
            font-weight: 800;
            
            .span-gradient {
                background: linear-gradient(90deg, rgba(2, 0, 36, 1) -30%, rgba(31, 83, 198, 1) 30%, rgba(0, 212, 255, 1) 100%);
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
            }
        }
    }

    .exp-card-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 85vh;
        min-width: 98vw;

        .exp-card {
            padding: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 99vw;

            .exp-info-container {
                padding: 2rem;
                display: flex;
                justify-content: space-between;
                min-width: 90vw;
                cursor: grab;
            }

            .info-text {
                font-size: 1.7rem;
                font-weight: 700;
                padding-bottom: 0.5rem;
            }

            .info-para {
                font-size: 1rem;
            }
        }
    }

    @media only screen and (max-width: 770px) {
        min-height: 80vh !important;

        .exp-card-container {
            min-height: 80vh !important;
        }

        .exp-title h1 {
            font-size: 2rem;
        }

        .info-text {
            font-size: 1rem !important;
            font-weight: 600;
        }

        .info-para {
            font-size: 0.8rem !important;
        }
    }

    @media only screen and (max-width: 610px) {
        .exp-info-container {
            flex-direction: column;
            align-items: center;
        }

        .info-text {
            padding-bottom: 0rem !important;
        }
    }

    @media only screen and (max-width: 480px) {
        .exp-title h1 {
            font-size: 1.5rem;
        }

        .info-text {
            font-size: 1rem !important;
            font-weight: 600;
        }

        .info-para {
            font-size: 0.6rem !important;
        }
    }

    @media only screen and (max-width: 355px) {
        .reveal-container {
            min-height: 15vh !important;
            min-width: 50vw !important;
            max-width: 50vw !important;
        }
    }
`;
