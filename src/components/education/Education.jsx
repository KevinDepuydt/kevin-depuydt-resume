import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'components/common/containers.styled';
import { SectionHeader } from 'components/common/headers.styled';
import {
  Item,
  ItemGroup,
  ItemDate,
  ItemDiploma,
  ItemSchool,
  ItemLocation, ItemDiplomaDetails
} from 'components/education/Education.styled';


export default function Education() {
  const { t } = useTranslation();
  const items = t('education.list', { returnObjects: true }) ?? [];
  return (
    <Container>
      <SectionHeader>{t('education.title')}</SectionHeader>
      {items.map((item, index) => (
        <Item key={`education-item-${index}`}>
          <ItemGroup>
            <ItemDiploma>{item.diploma}</ItemDiploma>, <ItemDiplomaDetails>{item.diplomaDetails}</ItemDiplomaDetails>
          </ItemGroup>
          <ItemGroup>
            <ItemDate>{item.date}</ItemDate> | <ItemSchool>{item.school}</ItemSchool> | <ItemLocation>{item.location}</ItemLocation>
          </ItemGroup>
        </Item>
      ))}
    </Container>
  );
}
