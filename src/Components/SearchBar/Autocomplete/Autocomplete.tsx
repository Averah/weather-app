import { AutoComplete } from 'antd';
import classNames from 'classnames';
import { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { getStateCities } from '../../../Store/Selectors/getLocationState';
import cls from './Autocomplete.module.scss';

interface AutocompleteProps {
    className?: string,
    children: ReactNode,
    searchHandler: (value: string) => void,
}

export const Autocomplete: FC<AutocompleteProps> = (props) => {
    const { className, children, searchHandler } = props;
    const cities = useSelector(getStateCities);

    const onSelect = (value: string) => {
        searchHandler(value);
    };

    const options = cities.map((city) => ({
        value: `${city.name}, ${city.region}, ${city.country}`,
        label: (
            <div>
                <span>{`${city.name}, ${city.region}, ${city.country}`}</span>
            </div>
        ),
    }));

    return (
        <AutoComplete
            className={classNames(cls.Autocomplete, className)}
            options={options}
            onSelect={onSelect}
        >
            {children}
        </AutoComplete>
    );
};
