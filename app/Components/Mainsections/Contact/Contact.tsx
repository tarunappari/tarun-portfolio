import React, { memo } from 'react'
import styled from 'styled-components';
import { BackgroundBeams } from '../../ui/BackgroundBeams';
import { SectionWrapper } from '@/app/hoc';

const Contact : React.FC = () => {
  return (
    <ContactContainer>
      <div style={{ zIndex: "-1" }}>
        <BackgroundBeams />
      </div>
      <h1>contact</h1>
    </ContactContainer>
  )
}

export default SectionWrapper(memo(Contact),'');

let ContactContainer = styled.div`
    position: relative;
    min-height: 100vh;
    border: 1px solid red;
    h1{
        font-size: 5rem;
    }
`