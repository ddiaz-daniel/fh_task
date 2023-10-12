import { Country } from '@/types/types';
import { useEffect, useState } from 'react';

const useCountriesList = () => {
    const [countriesData, setCountriesData] = useState<Country[] | null>(null);

    useEffect(() => {
        const fetchCountriesData = async () => {
            try {
                const response = await fetch('/static_dataset/cat_countries.json');
                if (!response.ok) {
                    throw new Error('API request failed');
                }
                const data: { countries: Country[]; } = await response.json();
                if (data.countries && Array.isArray(data.countries)) {
                    setCountriesData(data.countries);
                } else {
                    setCountriesData([]);
                }
            } catch (error) {
                console.error('Error loading countries data:', error);
                setCountriesData([]);
            }
        };

        fetchCountriesData();
    }, []);

    return { countriesData };
};

export default useCountriesList;
