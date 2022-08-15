import styled from 'styled-components';


export const Item = styled.div`
  flex: 1;
  word-break: break-word;
`;

export const ItemGroup = styled.div``;

export const ItemName = styled.span``;

export const ItemJob = styled.span``;

export const ItemContact = styled.span``;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  ${Item} ~ ${Item} {
    padding-left: 1rem;
    border-left: 1px solid black;
  }
`;
