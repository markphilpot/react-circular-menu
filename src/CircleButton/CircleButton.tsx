import React, { CSSProperties, FC, MouseEvent, PropsWithChildren, ReactElement } from 'react';
import { TooltipPlacement } from '../Tooltip/library/types';
import { StyledButton, StyledLink } from './StyledCircleButton';

export interface CircleButtonProps {
  size: number;
  link?: string;
  tooltip?: string;
  tooltipComponent?: ReactElement;
  tooltipPlacement?: TooltipPlacement;
  target?: string;
  className?: string;
  style?: CSSProperties;
  onClick?: (e?: MouseEvent<HTMLElement>) => void;
}

export const CircleButton: FC<PropsWithChildren<CircleButtonProps>> = (props) => {
  const { link, target, tooltip, tooltipComponent, tooltipPlacement, onClick, size, ...commonProps } = props;

  return link ? (
    <StyledLink {...commonProps} $size={size} href={link} target={target} />
  ) : (
    <StyledButton {...commonProps} $size={size} onClick={onClick} />
  );
};
