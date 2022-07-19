import styled from 'styled-components';


export const MainContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.defaultSpacing};
  background-color: ${({ theme }) => theme.leftContainerBackground};
`;

export const RightContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.defaultSpacing};
`;
