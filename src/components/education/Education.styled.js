import styled from 'styled-components';
import { secondaryInformationCss } from 'components/common/texts.styled';


export const Item = styled.div`
  margin-top: 1rem;
`;

export const ItemGroup = styled.div``;

export const ItemDate = styled.span`
  ${secondaryInformationCss}
`;

export const ItemSchool = styled.span`
  ${secondaryInformationCss}
`;

export const ItemLocation = styled.span`
  ${secondaryInformationCss}
`;

export const ItemDiploma = styled.span`
  color: ${({ theme }) => theme.primaryColor};
  font-weight: 700;
  font-size: 1.1rem;
`;

export const ItemDiplomaDetails = styled.span`
  font-weight: 400;
  font-size: 1.1rem;
`;
