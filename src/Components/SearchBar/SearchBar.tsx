import { Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCities } from '../../Store/fetchCities';
import { fetchWeather } from '../../Store/fetchWeather';
import { locationSlice } from '../../Store/locationSlice';
import { AppDispatch } from '../../Store/store';
import { debounce } from '../../utilities/debounce';
import { Autocomplete } from './Autocomplete/Autocomplete';
import cls from './SearchBar.module.scss';

const SearchBar: React.FC = () => {
    const [value, setValue] = useState('');

    const dispatch = useDispatch<AppDispatch>();

    const searchHandler = (value: string) => {
        if (value) {
            dispatch(fetchWeather(value));
        }
    };

    const onChangeHandler = (event: any) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        const searchCities = () => {
            dispatch(fetchCities(value));
        };
        if (value) {
            debounce(searchCities, 350);
        } else {
            dispatch(locationSlice.actions.setCities([]));
        }
    }, [value, dispatch]);

    return (
        <Autocomplete className={cls.searchBar} searchHandler={searchHandler}>
            <Input.Search
                className={cls.searchInput}
                value={value}
                onChange={onChangeHandler}
                placeholder="Search the city"
                allowClear
                onSearch={searchHandler}
            />
        </Autocomplete>
    );
};

export default SearchBar;
