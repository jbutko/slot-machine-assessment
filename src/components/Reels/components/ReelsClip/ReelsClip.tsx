import React from 'react';

import { Column } from 'components/Column';

export const ReelsClip: React.FC = ({ children }) => (
  <Column
    bg='#d6ebff'
    border='2px solid #eff6fd'
    height='270px'
    maxWidth='500px'
    mb='50px'
    overflow='hidden'
  >
    {children}
  </Column>
);
