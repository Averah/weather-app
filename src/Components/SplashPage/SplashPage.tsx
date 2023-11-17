import classNames from 'classnames';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import SplashIcon from '../../assets/splashIcon/lightIcon.png';
import { getError } from '../../Store/Selectors/getLocationState';
import cls from './SplashPage.module.scss';

interface SplashPageProps {
    className?: string;
  }

export const SplashPage: FC<SplashPageProps> = ({ className }) => {

    const error = useSelector(getError)

    return (
        <div className={classNames(cls.SplashPage, className)}>
             <div className={cls.error}>{error}</div>
            <div className={cls.splashIcon}> <img src={SplashIcon} alt='splash icon' /></div>
            <div className={cls.splashText}>Find out the weather forecast of the cities across the world</div>
        </div>
    );
};

