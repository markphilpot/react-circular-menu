import React, { PropsWithChildren } from 'react';

export const StyledCircleMenuData: React.FC<PropsWithChildren<{}>> = (props) => {
  return <ul className={'circle-menu-data'}>{props.children}</ul>;
};
