"use client";

import styled from "styled-components";

export const BackgroundGradientAnimation = () => {

  return (
    <GradientContainer
      className={"w-full h-full absolute overflow-hidden"}
    >
      <span className='w-full h-full absolute overflow-hidden'></span>
    </GradientContainer>
  );
};

let GradientContainer = styled.div`
   span{
            background: linear-gradient(
                90deg,
                rgba(2, 0, 36, 1) 10%,
                #153b8b 70%,
                rgba(2, 0, 36, 1) 100%
            );

            background-size: 400% 400%;
            animation: gradient 8s ease infinite;
  }

`