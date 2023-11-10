import React, { FC } from 'react';
import cls from './CurrentWeather.module.scss';
import { ExtraData } from './ExtraData/ExtraData';
import { Location } from './Location/Location';
import { WeatherConditions } from './WeatherConditions/WeatherConditions';

interface CurrentWeatherProps {

}

export const CurrentWeather: FC<CurrentWeatherProps> = (props) => {
    return (
        <div className={cls.CurrentWeather}>
            <Location />
            <WeatherConditions />
            <ExtraData />
        </div>
    );
};
