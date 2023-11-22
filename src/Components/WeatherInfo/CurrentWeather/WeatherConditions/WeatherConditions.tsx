import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import cls from './WeatherConditions.module.scss';
import { getCurrentWeatherState } from '../../../../Store/Selectors/getCurrentWeatherState';

export const WeatherConditions: FC = () => {
    const currentWeather = useSelector(getCurrentWeatherState);
    return (
        <div className={cls.WeatherConditions}>
            <div className={cls.weatherData}>
                <div className={cls.temp}>{`Current temperature: ${currentWeather.temp_c}°C`}</div>
                <div>{`Feels like: ${currentWeather.feelslike_c}°C`}</div>
                <div>{`Humidity: ${currentWeather.humidity}%`}</div>
                <div>{`Wind speed: ${currentWeather.humidity}kph`}</div>
            </div>

            <div className={cls.weatherIcon}>
                <img src={currentWeather.condition.icon} alt="condition icon" />
                <div className={cls.conditionText}>{currentWeather.condition.text}</div>
            </div>
        </div>
    );
};
