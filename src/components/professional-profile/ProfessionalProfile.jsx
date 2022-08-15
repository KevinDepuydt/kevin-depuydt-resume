import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'components/common/containers.styled';
import { Text } from 'components/professional-profile/ProfessionalProfile.styled';


export default function ProfessionalProfile() {
  const { t } = useTranslation();
  return (
    <Container>
      <Text>{t('professional.profile.introduction')}</Text>
    </Container>
  );
}
