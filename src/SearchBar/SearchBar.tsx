import React, { useState } from 'react';
import { Input } from 'antd';
import cls from './SearchBar.module.scss';
import { getForecast } from '../API/getForecast';

const { Search } = Input;

const SearchBar: React.FC = () => {
    const onSearch = async () => {
        const forecast = await getForecast(value)
        console.log(forecast);
    };
    const [value, setValue] = useState('')
    const onChangeHandler = (event:any) => {
        setValue(event.target.value)
    }

    return (
        <Search className={cls.searchBar} value={value} onChange={onChangeHandler} placeholder="Search the city" allowClear onSearch={onSearch} />
    )
};

export default SearchBar;
