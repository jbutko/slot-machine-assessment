import React from 'react';
import { Text } from 'rebass';

import { Row, TRowProps } from 'components/Row';

interface IBadgeProps extends TRowProps {
  text: string;
  bgColor?: string;
}

export const Badge: React.FC<IBadgeProps> = ({ text, bgColor = '#69ce96', ...rowProps }) => (
  <Row
    borderRadius='10px'
    bg={bgColor}
    color='white'
    padding='2px 10px'
    justifyContent='center'
    {...rowProps}
  >
    <Text fontWeight='bold'>{text}</Text>
  </Row>
);
