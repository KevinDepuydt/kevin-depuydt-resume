import styled from 'styled-components';
import { Container } from 'components/common/containers.styled';
import { SectionHeader } from 'components/common/headers.styled';


export const RESUME_CONTAINER_ID = 'resume-container';
export const RESUME_LEFT_MENU_ID = 'resume-left-menu';

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
    padding-top: ${({ theme }) => theme.defaultSpacing};
  }
`;

export const LeftContainer = styled.div.attrs({
  id: RESUME_LEFT_MENU_ID,
})`
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

  @media print {
    position: fixed;
    top: 0;
    bottom: 0;
    height: 100vh;
    width: ${({ theme }) => theme.sidebarPrintWidth};
    
    &::before {
      content: "";
      position: fixed;
      top: 100%;
      left: 0;
      bottom: 0;
      height: 100vh;
      width: ${({ theme }) => theme.sidebarPrintWidth};
      z-index: 2;
      background: ${({ theme }) => theme.darkBackgroundColor};
      -webkit-print-color-adjust: exact;
    }
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
  
  @media print {
    padding-left: calc(${({ theme }) => theme.sidebarPrintWidth} + ${({ theme }) => theme.containerSpacing});
  }
`;
