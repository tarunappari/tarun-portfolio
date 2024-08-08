import React from "react";
import dynamic from "next/dynamic";
import { SectionWrapper } from "../../../hoc";
import { technologies } from "../../../../public/data";
import styled from "styled-components";

// Use dynamic import for BallCanvas if it's a heavy component
const BallCanvas = dynamic(() => import("../../ui/BallCanvas"), { ssr: false });

// Define the type for a single technology
interface Technology {
    name: string;
    icon: string;
}

const Tech: React.FC = () => {
    return (
        <TechContainer>
            <div>
                <h1 className="h1 span-gradient">Technologies</h1>
            </div>
            <div className='tech-container flex flex-row flex-wrap justify-center gap-10'>
                {technologies.map((technology: Technology) => (
                    <div className='w-20 h-20 ball' key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                    </div>
                ))}
            </div>
        </TechContainer>

    );
};

export default SectionWrapper(Tech, "");


let TechContainer = styled.div`
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    h1{
        align-self: flex-start;
        font-size: 3rem;
        font-weight: 700;
        padding-bottom: 5rem;
    }
    .tech-container{
        max-width: 70%;
    }

    @media only screen and (max-width: 770px){
        h1{
            font-size: 2.5rem;
            padding-bottom: 2rem;
        }
        .tech-container{
            gap: 0.5rem !important;
            min-width: 85vw !important;
        }
        .ball{
            width: 6rem;
            height: 6rem;
        }
    }

    @media only screen and (max-width:490px){
        h1{
            font-size: 1.9rem;
        }
        .ball{
            width: 3.35rem;
            height: 3.35rem;
        }
        .tech-container{
            gap: 0.5rem !important;
            min-width: 90vw !important;
        }
    }

`