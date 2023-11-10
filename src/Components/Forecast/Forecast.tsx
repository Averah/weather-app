import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { getForecaseWeek } from '../../Store/Selectors/getForecastState';
import cls from './Forecast.module.scss';
import { ForecastDay } from './ForecastDay/ForecastDay';

interface ForecastProps {
}

export const Forecast: FC<ForecastProps> = (props) => {
    const forecastWeek = useSelector(getForecaseWeek)

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
