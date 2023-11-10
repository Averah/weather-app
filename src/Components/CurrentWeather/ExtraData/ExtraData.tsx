import React, { FC } from 'react';
import classNames from 'classnames';
import cls from './ExtraData.module.scss';
import { getCurrentWeatherState } from '../../../Store/Selectors/getCurrentWeatherState';
import { useSelector } from 'react-redux';

interface ExtraDataProps {

}

export const ExtraData: FC<ExtraDataProps> = (props) => {
    const currentWeather = useSelector(getCurrentWeatherState)
    return (
        <div className={cls.ExtraData}>
                <div>{`Humidity: ${currentWeather.humidity}%`}</div>
                <div>{`Wind speed: ${currentWeather.humidity}kph`}</div>
        </div>
    );
};
