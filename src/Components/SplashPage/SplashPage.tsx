import classNames from 'classnames';
import React, { FC, useContext } from 'react';
import { useSelector } from 'react-redux';
import LightIcon from '../../assets/splashIcon/lightIcon.png';
import DarkIcon from '../../assets/splashIcon/darkIcon.png';
import { Theme, ThemeContext } from '../../providers/ThemeProvider/ThemeContext';
import { getError } from '../../Store/Selectors/getLocationState';
import cls from './SplashPage.module.scss';

interface SplashPageProps {
    className?: string;
  }

export const SplashPage: FC<SplashPageProps> = ({ className }) => {
    const error = useSelector(getError);

    const { theme } = useContext(ThemeContext);
    return (
        <div className={classNames(cls.SplashPage, className)}>
            <div className={cls.error}>{error}</div>
            <div className={cls.splashIcon}>
                {' '}
                <img src={theme === Theme.LIGHT ? LightIcon : DarkIcon} alt="splash icon" />
            </div>
            <div className={cls.splashText}>Find out the weather forecast across the world</div>
        </div>
    );
};
