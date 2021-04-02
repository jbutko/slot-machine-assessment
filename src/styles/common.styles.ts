import { css } from 'styled-components/macro';

export const commonStyles = css`
  body {
    color: #464646;
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue';
    font-size: 1rem;
    line-height: 1.5;
    background: white;
    display: flex;
    flex-flow: column;
    min-height: 100vh;
    background: #e2eff9;
  }

  #root {
    min-height: 100vh;
  }

  a {
    color: inherit;

    &:-webkit-any-link {
      text-decoration: none;
    }
  }

  strong {
    font-weight: 700;
  }
`;
