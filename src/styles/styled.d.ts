import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      mobile: string;
      tablet: string;
      laptop: string;
      desktop: string;
    };
  }
}