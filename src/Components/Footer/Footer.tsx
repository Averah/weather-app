import { FC, useContext } from 'react';
import ghLogo from '../../assets/footerIcon/github-icon.png';
import darkGhLogo from '../../assets/footerIcon/github-icon-dark.png';
import { Theme, ThemeContext } from '../../providers/ThemeProvider/ThemeContext';

export const Footer: FC = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <a href="https://github.com/Averah" target="_blank" rel="noopener noreferrer" aria-label="github logo">
            <img className="gh-logo" src={theme === Theme.LIGHT ? ghLogo : darkGhLogo} alt="" />
        </a>
    );
};
