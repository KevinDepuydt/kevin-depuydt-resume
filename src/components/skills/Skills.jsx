import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'components/common/containers.styled';
import { SectionHeader } from 'components/common/headers.styled';
import { List, ListItem } from 'components/common/lists.styled';


const SKILLS_I18N_KEYS = [
  "programming.main",
  "programming.others",
  "practices",
  "management",
  "tools",
  "english",
  "french"
];

export default function Skills() {
  const { t } = useTranslation();
  const items = t('skills.items', { returnObjects: true }) ?? [];
  console.log(items);
  return (
    <Container>
      <SectionHeader>{t('skills.title')}</SectionHeader>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
    </Container>
  );
}
