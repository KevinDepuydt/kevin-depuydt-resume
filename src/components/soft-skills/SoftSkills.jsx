import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'components/common/containers.styled';
import { SectionHeader } from 'components/common/headers.styled';
import { List, ListItem } from 'components/common/lists.styled';


export default function SoftSkills() {
  const { t } = useTranslation();
  const items = t('soft-skills.list', { returnObjects: true }) ?? [];
  return (
    <Container>
      <SectionHeader>{t('soft-skills.title')}</SectionHeader>
      <List>
        {items.map((item, index) => (
          <ListItem key={`soft-skills-item-${index}`}>
            {item}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
