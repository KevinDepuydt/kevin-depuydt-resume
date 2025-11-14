import styled from 'styled-components';
import { secondaryInformationCss } from 'components/common/texts.styled';


export const Item = styled.div`
  padding-top: 1rem;
  color: ${({ theme }) => theme.textColor};
  
  @media print {
    break-inside: avoid;
  }
`;

export const ItemGroup = styled.div`
  margin-top: 0.2rem;
`;

export const ItemTitle = styled.span`
  color: ${({ theme }) => theme.primaryColor};
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
`;

export const ItemSecondaryText = styled.span`
  ${secondaryInformationCss};
`;

export const ItemContext = styled.span`
  display: block;
  padding-top: 0.5rem;
  font-family: 'Noto Serif', serif;
`;

export const ItemTechnologies = styled.span`
  ${secondaryInformationCss};
  font-size: 0.9rem;
  opacity: 1;
  // color: black;
`;