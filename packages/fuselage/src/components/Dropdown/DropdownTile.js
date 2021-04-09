import React from 'react';

import { Tile } from '../..';

const DropdownTile = (props) => {
  return (
    <Tile
      padding={0}
      paddingBlock={'x12'}
      paddingInline={0}
      elevation='2'
      {...props}
    />
  );
};

export default DropdownTile;