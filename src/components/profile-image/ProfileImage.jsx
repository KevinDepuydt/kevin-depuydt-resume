import React from 'react';
import { useTheme } from 'styled-components';
import { Container } from 'components/common/containers.styled';
import { Image, Logo } from './ProfileImage.styled';

import profilePhotoSrc from 'assets/photo-cv.jpg';


export default function ProfileImage() {
  const { logoSrc } = useTheme();
  return (
    <Container>
      <Image src={profilePhotoSrc} />
      {logoSrc && <Logo src={logoSrc} alt="" />}
    </Container>
  );
}
