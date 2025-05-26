import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      mobile: string;
      tablet: string;
      laptop: string;
      desktop: string;
    };
    colors: {
      primary: string;
      primaryLight: string;
      textDark: string;
      textMuted: string;
      background: string;
      backgroundMuted: string;
      footerBackground: string;
      link: string;
      linkHover: string;
      buttonPrimary: string;
      buttonHover: string;
      borderLight: string;
    };
  }
}