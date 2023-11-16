import React, { FC } from 'react';
import cls from './Location.module.scss';
import { useSelector } from 'react-redux';
import { getLocationState } from '../../../../Store/Selectors/getLocationState';


interface LocationProps {
}

export const Location: FC<LocationProps> = (props) => {
    const location = useSelector(getLocationState)
    return (
        <div className={cls.Location}>
            <div className={cls.cityName}>{location.name}</div>
            <div>{location.region}</div>
            <div>{location.country}</div>
            <div>{`Local time: ${location.localtime}`}</div>
        </div>
    );
};
