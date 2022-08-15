import styled from 'styled-components';


export const List = styled.ul`
  list-style-type: square;
  margin-block-start: 0.5rem;
  margin-block-end: 0.5rem;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 1rem;
  font-family: 'Noto Serif', serif;
  
  @media print {
    padding-inline-start: 1.3rem;
  }
`;

export const ListItem = styled.li`
  ::marker, span.material-icons, svg {
    color: ${({ theme }) => theme.secondaryColor};
  }
`;
