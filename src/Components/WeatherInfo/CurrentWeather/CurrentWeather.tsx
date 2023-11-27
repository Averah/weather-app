import React, { FC } from 'react';
import cls from './CurrentWeather.module.scss';
import { Location } from './Location/Location';
import { TempCondition } from './TempCondition/TempCondition';
import { TemperatureData } from './TemperatureData/TemperatureData';

export const CurrentWeather: FC = (props) => (
    <div className={cls.CurrentWeather}>
        <Location />
        <TempCondition />
        <TemperatureData />
    </div>
);
