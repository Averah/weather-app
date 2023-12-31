import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import cls from './TemperatureData.module.scss';
import { getCurrentWeatherState } from '../../../../Store/Selectors/getCurrentWeatherState';
import { transoformPressure } from '../../../../utilities/transformPressure';

export const TemperatureData: FC = () => {
    const currentWeather = useSelector(getCurrentWeatherState);
    const pressureInMmHg = currentWeather.pressure_mb && transoformPressure(currentWeather.pressure_mb);

    return (
        <div className={cls.TemperatureData}>
            <div>{`Real Feal: ${currentWeather.feelslike_c}°C`}</div>
            <div>{`Humidity: ${currentWeather.humidity}%`}</div>
            <div>{`Wind: ${currentWeather.wind_kph} kph`}</div>
            <div>{`Pressure: ${pressureInMmHg} mmHg`}</div>
        </div>
    );
};
