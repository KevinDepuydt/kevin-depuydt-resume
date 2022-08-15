import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'components/common/containers.styled';
import { FullName, JobTitle } from 'components/profile-informations/ProfileInformations.styled';



export default function ProfileInformations() {
  const { t } = useTranslation();
  return (
    <Container>
      <FullName>{t('profile.name')}</FullName>
      <JobTitle>{t('profile.job')}</JobTitle>
    </Container>
  );
}
