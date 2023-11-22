import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import cls from './Location.module.scss';
import { getLocationState } from '../../../../Store/Selectors/getLocationState';

interface LocationProps {
}

export const Location: FC<LocationProps> = (props) => {
    const location = useSelector(getLocationState);
    return (
        <div className={cls.Location}>
            <div className={cls.cityName}>{location.name}</div>
            <div>{location.region}</div>
            <div>{location.country}</div>
            <div>{`Local time: ${location.localtime}`}</div>
        </div>
    );
};
