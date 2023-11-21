import { AutoComplete } from 'antd';
import classNames from 'classnames';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getStateCities } from '../../../Store/Selectors/getLocationState';
import cls from './Autocomplete.module.scss';
import { useState } from 'react';


interface AutocompleteProps {
    className?: string,
    children: React.ReactNode,
    onSearch: (value: string) => void,
};

export const Autocomplete: FC<AutocompleteProps> = (props) => {
    const { className, children, onSearch } = props;
    const cities = useSelector(getStateCities)


    const onSelect = (value: string) => {
        onSearch(value);
    };

    let options = cities.map((city) => ({
        value: `${city.name}, ${city.region}, ${city.country}`,
        label: (
            <div>
                <span>{`${city.name}, ${city.region}, ${city.country}`}</span>
            </div>
        )
    }))


    return (
        <AutoComplete className={classNames(cls.Autocomplete, className)}
            options={options}
            onSelect={onSelect}

        >
            {children}
        </AutoComplete>
    )
}
