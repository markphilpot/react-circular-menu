import React, { FC, PropsWithChildren, useCallback } from 'react';
import { CircleButton, CircleButtonProps } from '../CircleButton/CircleButton';
import { Tooltip } from '../Tooltip/Tooltip';
import { StyledCircleMenuItem } from './StyledCircleMenuItem';

export interface CircleMenuItemProps extends Omit<CircleButtonProps, 'size'> {
  size?: number;
  radius?: number;
  menuActive?: boolean;
  rotationAngle?: number;
  closeOnClick?: boolean;
  toggleMenu?: () => void;
}

export const CircleMenuItem: FC<PropsWithChildren<CircleMenuItemProps>> = ({
  size = 2,
  radius = 1,
  menuActive = false,
  rotationAngle = 0,
  children,
  tooltip,
  tooltipComponent,
  tooltipPlacement,
  closeOnClick,
  toggleMenu,
  ...circleButtonProps
}) => {
  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (closeOnClick && toggleMenu) {
        toggleMenu();
      }
    },
    [closeOnClick, toggleMenu]
  );
  return (
    <StyledCircleMenuItem $radius={radius} menuActive={menuActive} rotationAngle={rotationAngle} onClick={handleClick}>
      <Tooltip title={tooltip ?? ''} component={tooltipComponent} placement={tooltipPlacement}>
        <CircleButton size={size} {...circleButtonProps}>
          {children}
        </CircleButton>
      </Tooltip>
    </StyledCircleMenuItem>
  );
};
