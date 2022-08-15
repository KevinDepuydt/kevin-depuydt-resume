import styled from 'styled-components';


export const Image = styled.div`
  background: #fff url("${({ src }) => src}") no-repeat;
  background-size: cover;
  width: ${({ theme }) => theme.profilePhotoWidth};
  padding-bottom: ${({ theme }) => theme.profilePhotoWidth};
  border-radius: 50%;
  margin: 0 auto;
  box-shadow: 0 0 0 5px ${({ theme }) => theme.secondaryColor};
  // border: 5px solid ${({ theme }) => theme.secondaryColor};
`;
