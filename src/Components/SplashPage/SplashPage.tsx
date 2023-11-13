import React, { FC } from 'react';
import cls from './SplashPage.module.scss';
import SplashIcon from '../../assets/splashIcon/lightIcon.png'
import classNames from 'classnames';

interface SplashPageProps {
    className?: string;
  }


export const SplashPage: FC<SplashPageProps> = ({ className }) => {
    return (
        <div className={classNames(cls.SplashPage, className)}>
            <img src={SplashIcon} />
            <div className={cls.splashText}>Find out the weather forecast of the cities across the world</div>
        </div>
    );
};

