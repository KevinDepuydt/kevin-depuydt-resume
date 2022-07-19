import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'components/common/containers.styled';
import { H1, H2 } from 'components/common/headers.styled';


export default function ProfileInfos() {
  const { t } = useTranslation();
  return (
    <Container>
      <H1>{t('fullName')}</H1>
      <H2>{t('jobTitle')}</H2>
    </Container>
  );
}
