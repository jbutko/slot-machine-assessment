import React from 'react';
import styled from 'styled-components/macro';

import { Row, TRowProps } from 'components/Row';

export type TColumnProps = TRowProps;

export const Column: React.FC<TColumnProps> = props => (
  <StyledRow flexDirection='column' {...props}>
    {props.children}
  </StyledRow>
);

const StyledRow = styled(Row)``;
