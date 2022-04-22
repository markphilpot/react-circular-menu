import React from 'react';

interface Props {
    className?: string;
}

export const StyledBackdrop: React.FC<Props & { onClick: () => void }> = (props) => {
    let className = 'circle-backdrop';
    if(props.className) {
        className += ` ${props.className}`
    }
    return (
        <div className={className}>
            {props.children}
        </div>
    )
}

export const StyledBackdropFocus: React.FC<Props> = (props) => {
    let className = 'circle-backdrop-focus';
    if(props.className) {
        className += ` ${props.className}`
    }
    return (
        <div className={className}>
            {props.children}
        </div>
    )
}