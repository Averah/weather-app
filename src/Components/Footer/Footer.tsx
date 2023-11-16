import React, { FC } from 'react';
import ghLogo from '../../assets/footerIcon/github-icon.svg';

export const Footer: FC = () => {
    return (
        <a href="https://github.com/Averah" target="_blank" rel="noopener noreferrer">
            <img className='gh-logo' src={ghLogo} alt='' />
        </a>
    );
};
