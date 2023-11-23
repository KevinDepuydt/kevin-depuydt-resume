import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from 'components/common/containers.styled';
import { SectionHeader } from 'components/common/headers.styled';
import { List, ListItem } from 'components/common/lists.styled';
import {
  Item,
  ItemGroup,
  ItemTitle,
  ItemType,
  ItemDate,
  ItemLocation,
  ItemTechnologies,
} from 'components/professional-experiences/ProfessionalExperiences.styled';


export default function ProfessionalExperiences() {
  const { t } = useTranslation();
  const items = t('professional.experiences.list', { returnObjects: true }) ?? [];
  return (
    <Container>
      <SectionHeader>{t('professional.experiences.title')}</SectionHeader>
      {items.filter((item) => !!item.show).map((item, index) => (
        <Item key={`professional-experiences-item-${index}`}>
          <ItemGroup>
            <ItemTitle>{item.title} - {item.company}</ItemTitle>
          </ItemGroup>
          <ItemGroup>
            <ItemDate>{item.date}</ItemDate> | <ItemType>{item.type}</ItemType> | <ItemLocation>{item.location}</ItemLocation>
          </ItemGroup>
          <ItemGroup>
            <ItemTechnologies>{item.technologies}</ItemTechnologies>
          </ItemGroup>
          <ItemGroup>
            <List>
              {item.details.map((detailsItem, detailsItemIndex) => (
                <ListItem key={`professional-experiences-item-${index}-details-${detailsItemIndex}`}>
                  {detailsItem}
                </ListItem>
              ))}
            </List>
          </ItemGroup>
        </Item>
      ))}
    </Container>
  );
}
