import React from 'react';
import { Container, Photo, FullName, JobTitle } from './Profile.styled';

import profilePhotoSrc from 'assets/profile-photo.jpg';


export default function Profile() {
  return (
    <Container>
      <Photo src={profilePhotoSrc} alt="Smiling Kevin Depuydt" />
      <FullName>Kevin Depuydt</FullName>
      <JobTitle>Web Developer</JobTitle>
    </Container>
  );
}
