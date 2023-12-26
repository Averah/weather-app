import React, { FC } from 'react';
import classNames from 'classnames';
import LightIcon from '../../assets/splashIcon/lightIcon.png';
import DarkIcon from '../../assets/splashIcon/darkIcon2.png';
import { useTheme } from '../../providers/ThemeProvider/useTheme';
import { Theme } from '../../providers/ThemeProvider/ThemeContext';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className={classNames(cls.themeSwitcher, className)}
        >
            <img src={theme === Theme.LIGHT ? DarkIcon : LightIcon} alt="splash icon" className={cls.themeImg} />
        </button>
    );
};
