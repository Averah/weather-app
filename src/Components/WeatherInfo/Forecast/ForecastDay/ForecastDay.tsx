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
            <div>{date}</div>
            <div><img src={condition.icon} alt="weather icon" /></div>
            <div>
                {avgtemp}
                °C
            </div>
            <div className={cls.conditionText}>{condition.text}</div>
        </div>
    );
};
