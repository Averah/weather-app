import React, { FC } from 'react';
import classNames from 'classnames';
import cls from './WeatherLogo.module.scss';
import WeatherText from '../../assets/weatherLogo/WeatherText 1.png';

interface WeatherLogoProps {
}

export const WeatherLogo: FC<WeatherLogoProps> = (props) => (
    <div className={classNames(cls.WeatherLogo)}>
        <h2>Weather Forecast</h2>
        {/* <img src={WeatherText} alt="Weather forecast logo" /> */}
    </div>
);
