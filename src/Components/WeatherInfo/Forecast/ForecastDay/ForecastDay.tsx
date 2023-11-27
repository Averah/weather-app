import React, { FC } from 'react';
import { ConditionType } from '../../../../Store/currentWeatherSlice';

import cls from './ForecastDay.module.scss';

interface ForecastDayProps {
    date: string,
    avgtemp: number | undefined,
    condition: ConditionType
}

export const ForecastDay: FC<ForecastDayProps> = (props) => {
    const { date, avgtemp, condition } = props;

    return (
        <div className={cls.ForecastDay}>
            <div className={cls.forecastDate}>{date}</div>
            <div className={cls.conditionIcon}>
                <img src={condition.icon} alt="weather icon" />
            </div>
            <div className={cls.forecastTemp}>
                {avgtemp}
                °C
            </div>
            <div className={cls.conditionText}>{condition.text}</div>
        </div>
    );
};
