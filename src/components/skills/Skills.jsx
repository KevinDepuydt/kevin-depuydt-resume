import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'components/common/containers.styled';
import { SectionHeader } from 'components/common/headers.styled';
import { List, ListItem } from 'components/common/lists.styled';


export default function Skills() {
  const { t } = useTranslation();
  const items = t('skills.list', { returnObjects: true }) ?? [];
  return (
    <Container>
      <SectionHeader>{t('skills.title')}</SectionHeader>
      <List>
        {items.map((item, index) => (
          <ListItem key={`skills-item-${index}`}>
            {item}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
