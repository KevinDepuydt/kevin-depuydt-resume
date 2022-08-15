import styled from 'styled-components';
import { H1, H2 } from 'components/common/headers.styled';


export const Container = styled.div`
  padding: ${({ theme }) => theme.defaultSpacing } 0;
`;

export const FullName = styled(H1)`
  font-size: 3rem;
  color: ${({ theme }) => theme.titleColor};
`;

export const JobTitle = styled(H2)`
  color: ${({ theme }) => theme.titleColor};
`;
