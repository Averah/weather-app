import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import cls from './TempCondition.module.scss';
import { getCurrentWeatherState } from '../../../../Store/Selectors/getCurrentWeatherState';

export const TempCondition: FC = () => {
    const currentWeather = useSelector(getCurrentWeatherState);
    return (
        <div className={cls.TempCondition}>
            <img src={currentWeather.condition.icon} alt="condition icon" />
            <div className={cls.temp}>{`${currentWeather.temp_c}°C`}</div>
            <div className={cls.conditionText}>{currentWeather.condition.text}</div>
        </div>
    );
};
