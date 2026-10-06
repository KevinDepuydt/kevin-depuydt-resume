import axiomeLogoSrc from 'assets/logo-axiome-light.svg';

const themeBase = {
  A4PageWidth: '210mm',
  A4PageHeight: '297mm',
  defaultSpacing: '1rem',
  containerSpacing: '2rem',
  profilePhotoWidth: '80%',
  sidebarPrintWidth: '33%',
}

export const defaultTheme = {
  ...themeBase,
  primaryColor: '#29B365', // '#0061FF',
  secondaryColor: '#29B365',
  titleColor: '#000',
  textColor: '#333',
  darkBackgroundColor: '#222',
  darkBackgroundTitleColor: '#fff',
  darkBackgroundTextColor: 'rgba(255, 255, 255, 0.7)',
};

export const axiomeTheme = {
  ...themeBase,
  primaryColor: '#ea690a', // '#e32521',
  secondaryColor: '#ea690a',
  titleColor: '#212020',
  textColor: '#212020',
  darkBackgroundColor: '#212020',
  darkBackgroundTitleColor: '#fff',
  darkBackgroundTextColor: 'rgba(255, 255, 255, 0.7)',
  logoSrc: axiomeLogoSrc,
};
