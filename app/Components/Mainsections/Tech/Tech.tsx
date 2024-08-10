import React, { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { SectionWrapper } from "../../../hoc";
import { technologies } from "../../../../public/data";
import styled from "styled-components";
import { motion } from 'framer-motion';
import { fadeIn } from "../../../motion/motion";

// Use dynamic import for BallCanvas if it's a heavy component
const BallCanvas = dynamic(() => import("../../ui/BallCanvas"), { ssr: false });

interface Technology {
    name: string;
    icon: string;
    num: number;
}

const Tech: React.FC = () => {
    const [inView, setInView] = useState<string | null>(null);
    const techRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView('inView');
                } else {
                    setInView(null);
                }
            },
            { threshold: 0.1 }
        );

        if (techRef.current) {
            observer.observe(techRef.current);
        }

        return () => {
            if (techRef.current) {
                observer.unobserve(techRef.current);
            }
        };
    }, []);

    return (
        <TechContainer ref={techRef}>
            <div>
                <h1 className="h1 span-gradient">Technologies</h1>
            </div>
            <div className='tech-container flex flex-row flex-wrap justify-center gap-10'>
                {technologies.map((technology: Technology) => (
                    <motion.div
                        variants={fadeIn('up', 'spring', technology.num, 0.5)}
                        className='w-20 h-20 ball'
                        key={technology.name}
                    >
                        {inView === 'inView' && <BallCanvas icon={technology.icon} />}
                    </motion.div>
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
    h1 {
        align-self: flex-start;
        font-size: 3rem;
        font-weight: 700;
        padding-bottom: 5rem;
    }
    .tech-container {
        max-width: 70%;
    }
    .ball:hover {
        cursor: grab;
    }

    .ball:active {
        cursor: grabbing;
    }

    @media only screen and (max-width: 770px) {
        h1 {
            font-size: 2.5rem;
            padding-bottom: 2rem;
        }
        .tech-container {
            gap: 0.5rem !important;
            min-width: 85vw !important;
        }
        .ball {
            width: 6rem;
            height: 6rem;
        }
    }

    @media only screen and (max-width: 490px) {
        h1 {
            font-size: 1.9rem;
        }
        .ball {
            width: 3.35rem;
            height: 3.35rem;
        }
        .tech-container {
            gap: 0.5rem !important;
            min-width: 90vw !important;
        }
    }
`;
