import { FC } from 'react';
import ghLogo from '../../assets/footerIcon/github-icon.svg';

export const Footer: FC = () => (
    <a href="https://github.com/Averah" target="_blank" rel="noopener noreferrer" aria-label="github logo">
        <img className="gh-logo" src={ghLogo} alt="" />
    </a>
);
