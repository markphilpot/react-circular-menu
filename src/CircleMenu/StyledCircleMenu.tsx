import React from 'react';

export const StyledCircleMenuData: React.FC = (props) => {
    return (
        <ul className={'circle-menu-data'}>
            {props.children}
        </ul>
    )
}
