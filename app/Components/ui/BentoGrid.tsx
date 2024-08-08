"use client";
import { Suspense, useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie"

import { cn } from "@/lib/utils";


import { BackgroundGradientAnimation } from "./GradientBg";
import animationData from "../../../public/data/mail.json";
import MagicButton from "./MagicButton";
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from "@react-three/drei";
import PcWorkStation from '../models/PcWorkStation';
import Butterfly from '../models/Butterfly'
import MailRocket from '../../../public/data/mail-rocket.json'
import confetti from '../../../public/data/confetti.json'


export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    id,
    title,
    description,
    //   remove unecessary things here
    img,
    imgClassName,
    titleClassName,
    spareImg,
}: {
    className?: string;
    id: number;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    const leftLists = ["Nodejs", "ReactJs", "JavaScript"];
    const rightLists = ["NextJS", "Express", "TypeScript"];

    const [copied, setCopied] = useState(false);

    const mailAnimation = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };

    const defaultOptions = {
        loop: copied,
        autoplay: copied,
        animationData: confetti,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };

    const mailRocket = {
        loop: true,
        autoplay: true,
        animationData: MailRocket,
    };

    const handleCopy = () => {
        const text = "tarunappari23@gmail.com";
        navigator.clipboard.writeText(text);
        setCopied(true);
    };

    useEffect(()=>{

        const timeoutId: number = window.setTimeout(() => {
            if(copied){
                setCopied(false)
            }
          }, 8000);

          return () => clearTimeout(timeoutId);
    },[copied])

    return (
        <div
            className={cn(
                // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
                 `row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4`,
                className
            )}
            style={{
                background: "rgb(6, 6, 14)",
                backgroundColor:
                    "linear-gradient(117deg, #030311 0%, rgba(1,4,15,1) 74%)",
            }}
        >
            {/* add img divs */}
            <div className={`${id === 6 && "flex"} h-full`}>
                <div className="w-full h-full absolute">
                    {img && id !== 1 && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, "object-cover object-center ")}
                        />
                    )}
                </div>
                <div
                    className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80" } `}
                >
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            //   width={220}
                            className="object-cover object-center w-full h-full"
                        />
                    )}
                </div>
                {id === 6 && (
                    // add background animation , remove the p tag
                    <BackgroundGradientAnimation />

                )}

                <div
                    className={cn(
                        titleClassName,
                        `group-hover/bento:translate-x-2 ${id === 6 && "email-gradient"} transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10`
                    )}
                >
                    {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
                    <div
                        className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#6d6d6d] z-10"
                        style={{ fontWeight: '600' }}>
                        {description}
                    </div>
                    {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
                    {/* remove mb-2 mt-2 */}
                    <div
                        className={`${id === 6 && 'email-title'}font-sans text-[#b1b1b1] text-lg lg:text-3xl max-w-96 font-bold z-10`}
                    >
                        {title}
                    </div>

                    {id === 6 && (
                        <div className="mt-5 relative">
                            <div
                                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}
                            >
                                <Lottie options={defaultOptions} height={200} width={400} />
                            </div>

                            <MagicButton
                                title={copied ? "Email is Copied!" : "Copy my email address"}
                                icon={<IoCopyOutline />}
                                position="left"
                                handleClick={handleCopy}
                                otherClasses="!bg-[#161A31]"
                            />
                        </div>
                    )}

                    {/* for the github 3d globe */}

                    {id === 1 &&
                        <div className="flex object-cover object-center pc-workstation items-center justify-center absolute md:top-40 w-full h-full">
                            <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-96 px-4">
                                <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-#d5d5d5 z-40" />
                                <div className="absolute w-full h-72 md:h-full z-10">
                                    <Canvas>
                                        <ambientLight intensity={-2} />
                                        <OrbitControls enableZoom={false} />
                                        <Suspense fallback={null}>
                                            <PcWorkStation />
                                        </Suspense>
                                        <Environment preset="studio" />
                                    </Canvas>
                                </div>
                            </div>
                        </div>}

                    {id === 5 &&
                        <div className="flex object-cover object-center butterfly items-center justify-center absolute md:top-40 w-full h-full">
                            <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-96 px-4">
                                <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-#d5d5d5 z-40" />
                                <div className="absolute w-full h-72 md:h-full z-10">
                                    <Canvas>
                                        <ambientLight intensity={-1} />
                                        <OrbitControls enableZoom={false} />
                                        <Suspense fallback={null}>
                                            <Butterfly />
                                        </Suspense>
                                        <Environment preset="studio" />
                                    </Canvas>
                                </div>
                            </div>
                        </div>}



                    {/* Tech stack list div */}
                    {id === 3 && (
                        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                            {/* tech stack lists */}
                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                                {leftLists.map((item, i) => (
                                    <span
                                        key={i}
                                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                                    >
                                        {item}
                                    </span>
                                ))}
                                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                            </div>
                            <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                                {rightLists.map((item, i) => (
                                    <span
                                        key={i}
                                        className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}


                </div>
                {
                    id === 6 && (
                        <div className="email-icon">
                            <div className="mail-container">
                                <div className="mail-rocket">
                                    <Lottie options={mailRocket} height={115} width={250} />
                                </div>
                                <Lottie options={mailAnimation} height={200} width={400} />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};