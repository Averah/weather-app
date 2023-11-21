import { Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCities } from '../../Store/fetchCities';
import { fetchWeather } from '../../Store/fetchWeather';
import { AppDispatch } from '../../Store/store';
import { debounce } from '../../utilities/debounce';
import { Autocomplete } from './Autocomplete/Autocomplete';
import cls from './SearchBar.module.scss';

const SearchBar: React.FC = () => {

    const [value, setValue] = useState('')

    const dispatch = useDispatch<AppDispatch>()

    const onSearch = (value: string) => {
        if (value) {
        dispatch(fetchWeather(value))
        }
    };

    const onChangeHandler = (event: any) => {
        setValue(event.target.value)
    }


    useEffect(() => {
        const searchCities = () => {            
            dispatch(fetchCities(value))
        }
        if (value) {
            debounce(searchCities, 400)
        }

    }, [value, dispatch])

    return (


        <Autocomplete className={cls.searchBar} onSearch={onSearch}>
             <Input.Search className={cls.searchInput} value={value} onChange={onChangeHandler} placeholder="Search the city" allowClear={true} onSearch={onSearch} />
        </Autocomplete>


    )
};

export default SearchBar;


