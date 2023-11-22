import React, { FC } from 'react';
import { CurrentWeather } from './CurrentWeather/CurrentWeather';
import { Forecast } from './Forecast/Forecast';

interface WeatherInfoProps {
    className?: string;
}

export const WeatherInfo: FC<WeatherInfoProps> = ({ className }) => (
    <div>
        <CurrentWeather />
        <Forecast />
    </div>
);
