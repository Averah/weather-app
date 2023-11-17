import { AutoComplete, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCities } from '../../Store/fetchCities';
import { fetchWeather } from '../../Store/fetchWeather';
import { AppDispatch } from '../../Store/store';
import { debounce } from '../../utilities/debounce';
import cls from './SearchBar.module.scss';

const SearchBar: React.FC = () => {

    const [value, setValue] = useState('')

    const dispatch = useDispatch<AppDispatch>()
    const onSearch = (value: string) => {
        dispatch(fetchWeather(value))
    };

    const onChangeHandler = (event: any) => {
        setValue(event.target.value)
    }

    useEffect(() => {
        const searchCities = () => {            
            dispatch(fetchCities(value))
        }
        if (value) {
            debounce(searchCities, 2000)
        }

    }, [value, dispatch])

    return (
        <AutoComplete className={cls.searchBar}>
            <Input.Search className={cls.searchInput} value={value} onChange={onChangeHandler} placeholder="Search the city" allowClear onSearch={onSearch} />
        </AutoComplete>

    )
};

export default SearchBar;


