import React, {PropsWithChildren} from 'react';
import { CircleButton } from "../CircleButton/CircleButton";

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

export const StyledCircleMenuToggle: React.FC<PropsWithChildren<Props>> = (props) => {
    const { menuActive, className, ...rest } = props;
    let cn = 'circle-menu-toggle';
    if(className) {
        cn += ` ${className}`
    }
    return (
        <CircleButton className={cn} {...rest}/>
    )
}
