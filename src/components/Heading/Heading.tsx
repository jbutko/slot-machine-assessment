import React from 'react';
import { Text, TextProps } from 'rebass';

export const Heading: React.FC<TextProps> = ({ children, fontSize = ['2rem'], ...textProps }) => (
  <Text fontSize={fontSize} fontWeight='bold' textAlign='center' {...textProps}>
    {children}
  </Text>
);
