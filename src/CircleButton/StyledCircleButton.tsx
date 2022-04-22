import React from 'react';
import {LinkProps, ButtonProps} from "../types";

interface Props {
  $size: number;
}

export const StyledButton: React.FC<Props & ButtonProps> = (props) => {
    const { $size, children, ...rest } = props;
  return (
      <button className={'circle-button'} style={{
        width: `${props.$size}rem`,
        height: `${props.$size}rem`
      }} {...rest}>
        {children}
      </button>
  )
}

export const StyledLink: React.FC<Props & LinkProps & { href: string, target?: string }> = (props) => {
    const { $size, children, ...rest } = props;
  return (
      <a className={'circle-button'} style={{
        width: `${props.$size}rem`,
        height: `${props.$size}rem`
      }} {...rest}>
        {children}
      </a>
  )
}