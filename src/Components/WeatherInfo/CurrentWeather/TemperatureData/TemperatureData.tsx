import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import cls from './TemperatureData.module.scss';
import { getCurrentWeatherState } from '../../../../Store/Selectors/getCurrentWeatherState';

export const TemperatureData: FC = () => {
    const currentWeather = useSelector(getCurrentWeatherState);
    return (
        <div className={cls.TemperatureData}>
            <div>{`Real Feal: ${currentWeather.feelslike_c}°C`}</div>
            <div>{`Humidity: ${currentWeather.humidity}%`}</div>
            <div>{`Wind: ${currentWeather.wind_kph} kph`}</div>
        </div>
    );
};
