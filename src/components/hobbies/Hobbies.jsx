import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'components/common/containers.styled';
import { SectionHeader } from 'components/common/headers.styled';
import { List, ListItem } from 'components/common/lists.styled';


export default function Hobbies() {
  const { t } = useTranslation();
  const items = t('hobbies.list', { returnObjects: true }) ?? [];
  return (
    <Container>
      <SectionHeader>{t('hobbies.title')}</SectionHeader>
      <List>
        {items.map((item, index) => (
          <ListItem key={`hobbies-item-${index}`}>
            {item}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
