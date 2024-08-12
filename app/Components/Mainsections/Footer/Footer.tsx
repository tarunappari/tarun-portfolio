"use client"

import React, { memo, useState } from "react";
import { SectionWrapper } from '@/app/hoc';
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import styled from "styled-components";
import MagicButton from "../../ui/MagicButton";
import { IoCopyOutline } from "react-icons/io5";



const Footer: React.FC = () => {

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const text = "tarunappari23@gmail.com";
        navigator.clipboard.writeText(text);
        setCopied(true);
    };


    return (
        <FooterContainer>
            <div className="mail-copy-container">
                <MagicButton
                    title={copied ? "Email is Copied!" : "Copy my email address"}
                    icon={<IoCopyOutline />}
                    position="left"
                    handleClick={handleCopy}
                    otherClasses="!bg-[#161A31]"
                />
            </div>
            <div className="icons-container">
                <a href="https://www.linkedin.com/in/tarun-appari-77ba93280/" target="_blank"><IconBrandLinkedin className="h-7 w-7 text-neutral-800 dark:text-neutral-300" /></a>
                <a href="https://github.com/tarunappari" target="_blank"><IconBrandGithub className="h-7 w-7 text-neutral-800 dark:text-neutral-300" /></a>
            </div>
        </FooterContainer>
    )
}

export default SectionWrapper(memo(Footer), '');

let FooterContainer = styled.div`
    padding: 1rem 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -4rem;
    .mail-copy-container{
        margin-top: -3.5rem;
        .check{
            border: 1px solid red !important;
        }
    }
    .icons-container{
        display: flex;
        gap: 1rem;
        z-index: 99;
    }

    @media only screen and (max-width:800px){
        margin-top: -8rem !important;
        .mail-copy-container{
        margin-top: -3rem;
        padding-right: 2rem;
    }
}

    @media only screen and (max-width:650px){
        margin-top: 0rem !important;
        gap: 1rem;
        padding: 1rem;
        .mail-copy-container{
        margin-top: 0.2rem;
        padding-right: 2rem;
    }
    }

`