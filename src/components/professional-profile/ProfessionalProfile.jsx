import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'components/common/containers.styled';
import { Text } from 'components/professional-profile/ProfessionalProfile.styled';
import { getDeveloperActivityYears } from '../../helpers/dates';


const DEVELOPER_ACTIVITY_YEARS = getDeveloperActivityYears();

export default function ProfessionalProfile() {
  const { t } = useTranslation();
  return (
    <Container>
      <Text>{t('professional.profile.introduction', { years: DEVELOPER_ACTIVITY_YEARS })}</Text>
    </Container>
  );
}
