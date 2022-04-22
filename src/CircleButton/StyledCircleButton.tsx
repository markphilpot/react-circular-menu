import React from 'react';
import {LinkProps, ButtonProps} from "../types";

interface Props {
  $size: number;
}

export const StyledButton: React.FC<Props & ButtonProps> = (props) => {
    const { $size, className, children, ...rest } = props;
    let cn = 'circle-button';
    if(className) {
        cn += ` ${className}`
    }
  return (
      <button className={cn} style={{
        width: `${props.$size}rem`,
        height: `${props.$size}rem`
      }} {...rest}>
        {children}
      </button>
  )
}

export const StyledLink: React.FC<Props & LinkProps & { href: string, target?: string }> = (props) => {
    const { $size, className, children, ...rest } = props;
    let cn = 'circle-button';
    if(className) {
        cn += ` ${className}`
    }
  return (
      <a className={cn} style={{
        width: `${props.$size}rem`,
        height: `${props.$size}rem`
      }} {...rest}>
        {children}
      </a>
  )
}