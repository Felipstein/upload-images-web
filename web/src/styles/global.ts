import { createGlobalStyle, withTheme, css } from 'styled-components';
import { ThemeProps } from './theme';

export type GlobalThemeProps = {
  theme: ThemeProps;
}

const globalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    height: 100vh;

    ${({ theme }: GlobalThemeProps) => css`
      background-color: ${theme.colors.purple[500]};
      font-family: ${theme.font};
      font-size: ${theme.fontSize.md};
    `}
  }

  button, input, a {
    font-size: inherit;
  }

  h1 {
    font-size: ${({ theme }: GlobalThemeProps ) => theme.headingSize.lg};
  }

  h2 {
    font-size: ${({ theme }: GlobalThemeProps ) => theme.headingSize.md};
  }

  h3 {
    font-size: ${({ theme }: GlobalThemeProps ) => theme.headingSize.sm};
  }
`;

export default withTheme(globalStyle);