import React from 'react';
import { Container } from 'components/common/containers.styled';
import { Image } from './ProfileImage.styled';

import profilePhotoSrc from 'assets/profile-photo.jpg';


export default function ProfileImage() {
  return (
    <Container>
      <Image src={profilePhotoSrc} />
    </Container>
  );
}
