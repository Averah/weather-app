import { Input } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../../Store/fetchWeather';
import cls from './SearchBar.module.scss';

const { Search } = Input;

const SearchBar: React.FC = () => {
    const dispatch = useDispatch()

    const onSearch = async (value:string) => {
        //@ts-ignore
        dispatch(fetchWeather(value))
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


