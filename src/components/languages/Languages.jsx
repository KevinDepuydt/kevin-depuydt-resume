import React from 'react';
import { Container } from 'components/common/containers.styled';
import { SectionHeader } from 'components/common/headers.styled';
import { useTranslation } from 'react-i18next';
import { List, ListItem } from 'components/common/lists.styled';


export default function Languages() {
  const { t } = useTranslation();
  const items = t('languages.list', { returnObjects: true }) ?? [];
  return (
    <Container>
      <SectionHeader>{t('languages.title')}</SectionHeader>
      <List>
        {items.map((item, index) => (
          <ListItem key={`languages-item-${index}`}>
            {item}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
