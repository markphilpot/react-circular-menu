import React from 'react';
import {DivProps} from "../types";

export const StyledTooltip: React.FC<DivProps> = (props) => {
    const { children, ...rest } = props;
    return (
        <div className={'circle-tooltip'} {...rest}>
            {children}
        </div>
    )
}