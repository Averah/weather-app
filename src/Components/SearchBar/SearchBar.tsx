import { Input } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getForecast } from '../../API/getForecast';
import { currentWeatherActions } from '../../Store/currentWeatherSlice';
import { forecastActions } from '../../Store/forecastSlice';
import { locationActions } from '../../Store/locationSlice';
import cls from './SearchBar.module.scss';

const { Search } = Input;

const SearchBar: React.FC = () => {
    const dispatch = useDispatch()

    const onSearch = async () => {
        const response = await getForecast(value)
        dispatch(locationActions.setLocation(response.location))
        dispatch(currentWeatherActions.setCurrentWeather(response.current));
        dispatch(forecastActions.setForecast(response.forecast.forecastday))
    };
    const [value, setValue] = useState('')
    const onChangeHandler = (event: any) => {
        setValue(event.target.value)
    }

    return (
        <Search className={cls.searchBar} value={value} onChange={onChangeHandler} placeholder="Search the city" allowClear onSearch={onSearch} />
    )
};

export default SearchBar;


