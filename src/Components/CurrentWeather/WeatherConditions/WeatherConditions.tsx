import React, { FC } from 'react';
import cls from './WeatherConditions.module.scss';
import { useSelector } from 'react-redux';
import { getCurrentWeatherState } from '../../../Store/Selectors/getCurrentWeatherState';

interface WeatherConditionsProps {
    className?: string;
}

export const WeatherConditions: FC<WeatherConditionsProps> = (props) => {

    const currentWeather = useSelector(getCurrentWeatherState)
    return (
        <div className={cls.WeatherConditions}>
            <div className={cls.tempData}>
                <div>{`Current temperature: ${currentWeather.temp_c}°C`}</div>
                <div>{`Feels like: ${currentWeather.feelslike_c}°C`}</div>
                <div className={cls.condition}>
                    <img src={currentWeather.condition.icon} alt='condition icon' />
                    <div className={cls.conditionText}>{currentWeather.condition.text}</div>
                </div>
            </div>
            {/* <div className={cls.extraData}>
                <div>{`Humidity: ${currentWeather.humidity}%`}</div>
                <div>{`Wind speed: ${currentWeather.humidity}kph`}</div>
            </div> */}
        </div>
    );
};
