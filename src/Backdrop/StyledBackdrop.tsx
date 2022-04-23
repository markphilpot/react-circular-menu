import React, {PropsWithChildren} from 'react';

interface Props {
    className?: string;
}

export const StyledBackdrop: React.FC<PropsWithChildren<Props & { onClick: () => void }>> = (props) => {
    const { className, children, ...rest } = props;
    let cn = 'circle-backdrop';
    if(className) {
        cn += ` ${className}`
    }
    return (
        <div className={cn} {...rest}>
            {children}
        </div>
    )
}

export const StyledBackdropFocus: React.FC<PropsWithChildren<Props>> = (props) => {
    const { className, children, ...rest } = props;
    let cn = 'circle-backdrop-focus';
    if(className) {
        cn += ` ${className}`
    }
    return (
        <div className={cn} {...rest}>
            {children}
        </div>
    )
}