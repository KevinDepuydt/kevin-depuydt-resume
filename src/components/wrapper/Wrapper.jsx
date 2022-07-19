import React from 'react';
import { MainContainer, LeftContainer, RightContainer } from './Wrapper.styled';
import Profile from '../profile/Profile';


export default function Wrapper() {
  return (
    <MainContainer>
      <LeftContainer>
        <Profile />
        {/* contact */}
        {/* skills */}
        {/* hobbies */}
      </LeftContainer>
      <RightContainer>
        {/* professional introduction */}
        {/* professional experiences */}
        {/* education */}
        {/* references */}
      </RightContainer>
    </MainContainer>
  );
}
