import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'components/common/containers.styled';
import { SectionHeader } from 'components/common/headers.styled';
import {
  ItemsContainer,
  Item,
  ItemGroup,
  ItemName,
  ItemJob,
  ItemContact
} from './References.styled';


export default function References() {
  const { t } = useTranslation();
  const items = t('references.list', { returnObjects: true }) ?? [];
  return (
    <Container>
      <SectionHeader>{t('references.title')}</SectionHeader>
      <ItemsContainer>
        {items.map((item, index) => (
          <Item key={`references-item-${index}`}>
            <ItemGroup>
              <ItemName>{item.name}</ItemName>
            </ItemGroup>
            <ItemGroup>
              <ItemJob>{item.job}</ItemJob>
            </ItemGroup>
            <ItemGroup>
              <ItemContact>{item.contact}</ItemContact>
            </ItemGroup>
          </Item>
        ))}
      </ItemsContainer>
    </Container>
  );
}
