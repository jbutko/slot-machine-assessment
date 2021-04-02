import React from 'react';

import { Row } from 'components/Row';
import { Reel } from './components/Reel';
import { ReelsClip } from './components/ReelsClip';
import { useStore } from 'store';

interface IReelsProps {}

export const Reels: React.FC<IReelsProps> = () => {
  const { state } = useStore();

  return (
    <ReelsClip>
      <Row justifyContent='space-between'>
        <Reel running={state.running} />
        <Reel running={state.running} />
        <Reel running={state.running} />
      </Row>
    </ReelsClip>
  );
};
