import styled from 'styled-components';
import { Container } from 'components/common/containers.styled';
import { SectionHeader } from 'components/common/headers.styled';


export const RESUME_CONTAINER_ID = 'resume-container';

export const MainContainer = styled.div.attrs({
  id: RESUME_CONTAINER_ID,
})`
  flex: 1;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: ${({ theme }) => theme.A4PageWidth};
  height: ${({ theme }) => theme.A4PageHeight};
  box-shadow: 0 0 10px rgba(0,0,0,0.25);
  overflow: hidden;
  
  ${Container} ~ ${Container} {
    padding-top: ${({ theme }) => theme.defaultSpacing };
  }
`;

export const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.containerSpacing};
  background: ${({ theme }) => theme.darkBackgroundColor};
  -webkit-print-color-adjust: exact;
  color: ${({ theme }) => theme.darkBackgroundTextColor};
  
  ${SectionHeader} {
    color: ${({ theme }) => theme.darkBackgroundTitleColor};
  }
`;

export const RightContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.containerSpacing};
  color: ${({ theme }) => theme.textColor};

  ${SectionHeader} {
    color: ${({ theme }) => theme.titleColor};
  }
`;
