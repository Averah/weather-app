import React, { FC } from 'react';
import classNames from 'classnames';
import cls from './WeatherLogo.module.scss';
import WeatherText from '../../assets/weatherLogo/WeatherText.png'

interface WeatherLogoProps {
}

export const WeatherLogo: FC<WeatherLogoProps> = (props) => {
    return (
        <div className={classNames(cls.WeatherLogo)}>
            <img src={WeatherText} alt='Weather forecast logo' />
        </div>
    );
};
