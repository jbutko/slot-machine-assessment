import { createGlobalStyle } from 'styled-components';

import { resetStyles } from './reset.styles';
import { commonStyles } from './common.styles';

export const GlobalStyle = createGlobalStyle`
  ${resetStyles};
  ${commonStyles};
`;
