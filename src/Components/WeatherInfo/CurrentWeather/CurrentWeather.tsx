import React, { FC } from 'react';
import cls from './CurrentWeather.module.scss';
import { Location } from './Location/Location';
import { WeatherConditions } from './WeatherConditions/WeatherConditions';

export const CurrentWeather: FC = (props) => {
    return (
        <div className={cls.CurrentWeather}>
            <Location />
            <WeatherConditions />
        </div>
    );
};
