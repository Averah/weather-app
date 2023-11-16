import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import cls from './Forecast.module.scss';
import { ForecastDay } from './ForecastDay/ForecastDay';
import { getForecastWeek } from '../../../Store/Selectors/getForecastState';

interface ForecastProps {
}

export const Forecast: FC<ForecastProps> = (props) => {
    const forecastWeek = useSelector(getForecastWeek)

    return (
        <div className={cls.Forecast}>
            <div className={cls.forecastLogo}>
                Forecast
            </div>
            {
                forecastWeek.map((day) => {
                    return <ForecastDay date={day.date} avgtemp_c={day.avgtemp_c} condition={day.condition} key={day.date} />
                })
            }
        </div>
    );
};
