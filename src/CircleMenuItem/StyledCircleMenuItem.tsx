import React from 'react';

interface Props {
  menuActive: boolean;
  rotationAngle: number;
  $radius: number;
}

export const StyledCircleMenuItem: React.FC<Props> = (props) => {
  const { menuActive, rotationAngle, $radius, ...rest } = props;

  const style = menuActive ? {
    transform: `translateY(-50%) rotate(${rotationAngle}deg) translate(${$radius}rem) rotate(${-rotationAngle}deg)`,
    visibility: 'visible',
    opacity: 1,
  } : {}

  return (
      <li
          className={'circle-menu-item'}
          // @ts-ignore ¯\_(ツ)_/¯
          style={style}
          {...rest}
      >
        {props.children}
      </li>
  )
}