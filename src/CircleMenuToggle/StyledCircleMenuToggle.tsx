import React, {MouseEventHandler} from 'react';
import { CircleButton } from "../CircleButton/CircleButton";
import {ButtonProps, DivProps} from "../types";

export const StyledCircleMenuBurgerBar: React.FC = (props) => {
    return (
        <div className={'circle-menu-burger-bar'}>
            {props.children}
        </div>
    )
}

interface Props {
  menuActive: boolean;
  size: number;
    className?: string;
    onClick: any; // TODO
}

// export const StyledCircleMenuToggle = styled(CircleButton)<Props>`
//   position: relative;
//   flex-direction: column;
//   z-index: 103;
//
//   &:is(:hover, :focus, :active) > ${StyledCircleMenuBurgerBar} {
//     background: #ffffff;
//   }
//
//   ${({ menuActive }) =>
//     menuActive &&
//     css`
//       ${StyledCircleMenuBurgerBar}:nth-child(1) {
//         transform: translate(-0.1em, 0.17em) rotateZ(-40deg);
//         width: 1.2em;
//       }
//       ${StyledCircleMenuBurgerBar}:nth-child(2) {
//         opacity: 0;
//       }
//       ${StyledCircleMenuBurgerBar}:nth-child(3) {
//         transform: translate(-0.1em, -0.17em) rotateZ(40deg);
//         width: 1.2em;
//       }
//     `}
// `;

export const StyledCircleMenuToggle: React.FC<Props> = (props) => {
    const { menuActive, ...rest } = props;
    return (
        <CircleButton {...rest}/>
    )
}
