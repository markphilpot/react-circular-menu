import React, {
  Children,
  cloneElement,
  FC,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { getTooltipElementProps } from './functions/tooltip-element-props';
import { useTooltipTransform } from './functions/tooltip-transform-hook';
import { TooltipPlacement } from './library/types';
import { StyledTooltip } from './StyledTooltip';

export interface TooltipProps {
  title: string;
  component?: ReactElement;
  placement?: TooltipPlacement;
}

export const Tooltip: FC<PropsWithChildren<TooltipProps>> = ({
  title,
  component,
  placement = TooltipPlacement.Top,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tooltip, setTooltip] = useState<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const tooltipStyles = useTooltipTransform(wrapperRef.current, tooltip, placement);

  const openTooltip = () => !isOpen && setIsOpen(true);
  const closeTooltip = () => isOpen && setIsOpen(false);

  if ((!title && !component) || !isValidElement(children)) {
    return <>{children}</>;
  }

  return (
    <div ref={wrapperRef}>
      {cloneElement(Children.only(children), getTooltipElementProps(children.props, openTooltip, closeTooltip))}
      {isOpen &&
        createPortal(
          <StyledTooltip
            style={tooltipStyles}
            ref={(element: HTMLDivElement) => element && setTooltip(element)}
            role="tooltip"
          >
            {title || component}
          </StyledTooltip>,
          document.getElementsByTagName('body')[0]
        )}
    </div>
  );
};
