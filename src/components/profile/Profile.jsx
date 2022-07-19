import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Photo, FullName, JobTitle } from './Profile.styled';

import profilePhotoSrc from 'assets/profile-photo.jpg';


export default function Profile() {
  const { t } = useTranslation();
  return (
    <Container>
      <Photo src={profilePhotoSrc} alt="Smiling Kevin Depuydt" />
      <FullName>{t('fullName')}</FullName>
      <JobTitle>{t('jobTitle')}</JobTitle>
    </Container>
  );
}
