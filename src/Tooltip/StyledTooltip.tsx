import React, {PropsWithChildren} from 'react';
import {DivProps} from "../types";

export const StyledTooltip = React.forwardRef<HTMLDivElement, PropsWithChildren<DivProps>>((props, ref) => {
    const { children, ...rest } = props;
    return (
        <div ref={ref} className={'circle-tooltip'} {...rest}>
            {children}
        </div>
    )
});