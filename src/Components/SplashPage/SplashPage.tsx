import classNames from 'classnames';
import React, { FC } from 'react';
import SplashIcon from '../../assets/splashIcon/lightIcon.png';
import cls from './SplashPage.module.scss';

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

