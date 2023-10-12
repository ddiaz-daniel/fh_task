import { CountriesData } from '@/types/types';
import { useState, useEffect } from 'react';


const useCountriesData = () => {
    const [countriesData, setCountriesData] = useState<CountriesData[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/static_dataset/fossil-fuel-co2-emissions-by-nation_json.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data: CountriesData[] = await response.json();
                setCountriesData(data);
            } catch (error) {
                console.error('Error loading countries data:', error);
                setCountriesData(null);
            }
        };

        fetchData();
    }, []);

    return { countriesData };
};

export default useCountriesData;
