import React from 'react';
import Contact from 'components/contact/Contact';
import Education from 'components/education/Education';
import Hobbies from 'components/hobbies/Hobbies';
import Languages from 'components/languages/Languages';
import ProfessionalExperiences from 'components/professional-experiences/ProfessionalExperiences';
import ProfessionalProfile from 'components/professional-profile/ProfessionalProfile';
import ProfileImage from 'components/profile-image/ProfileImage';
import ProfileInformations from 'components/profile-informations/ProfileInformations';
// import References from 'components/references/References';
import Skills from 'components/skills/Skills';
import { MainContainer, LeftContainer, RightContainer } from './Wrapper.styled';


export default function Wrapper() {
  return (
    <MainContainer>
      <LeftContainer>
        <ProfileImage />
        <Contact />
        <Skills />
        <Languages />
        <Hobbies />
      </LeftContainer>
      <RightContainer>
        <ProfileInformations />
        <ProfessionalProfile />
        <ProfessionalExperiences />
        <Education />
        {/*<References />*/}
      </RightContainer>
    </MainContainer>
  );
}
