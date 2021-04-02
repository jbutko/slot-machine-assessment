import React from 'react';
import styled, { css } from 'styled-components/macro';
import { Flex, BoxProps } from 'rebass';
import {
  position,
  PositionProps,
  boxShadow,
  ShadowProps,
  color,
  ColorProps,
  border,
  BorderProps,
  background,
  BackgroundProps,
  typography,
  TypographyProps,
} from 'styled-system';
import { system } from 'styled-system';

export interface IOwnProps {
  children?: React.ReactNode;
  color?: string;
  withHover?: boolean;
}

export type TRowProps = IOwnProps &
  BoxProps &
  PositionProps &
  ShadowProps &
  ColorProps &
  BackgroundProps &
  TypographyProps &
  BorderProps;

export const Row: React.FC<TRowProps> = props => (
  <StyledFlex {...props}>{props.children}</StyledFlex>
);

const StyledFlex = styled(Flex)<Partial<IOwnProps>>`
  ${border}
  ${color};
  ${background};
  ${position};
  ${boxShadow};
  ${typography};
  ${system({
    display: true,
    transform: true,
    float: true,
  })}

  ${({ withHover }) =>
    withHover &&
    css`
      &:hover {
        cursor: pointer;
      }
    `};
`;
