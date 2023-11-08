import React, { FC, memo } from 'react';
import classNames from 'classnames';
import cls from './WeatherLogo.module.scss';
import WeatherText from '../assets/logo/WeatherText5.png'

interface WeatherLogoProps {
}

export const WeatherLogo: FC<WeatherLogoProps> = memo((props) => {
    return (
        <div className={classNames(cls.WeatherLogo)}>
            <img src={WeatherText} alt='Weather forecast logo' />
        </div>
    );
});
