import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
import cls from './ContentWrapper.module.scss';
import { WeatherLogo } from '../WeatherLogo/WeatherLogo';
import SearchBar from '../SearchBar/SearchBar';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';

interface ContentWrapperProps {
    className?: string;
    children: ReactNode;
}

export const ContentWrapper: FC<ContentWrapperProps> = ({ className, children }) => (
    <div className={classNames(cls.ContentWrapper, className)}>
        <ThemeSwitcher className={cls.themeSwitcher} />
        <WeatherLogo />
        <SearchBar />
        <div className={cls.content}>
            {children}
        </div>
    </div>
);
