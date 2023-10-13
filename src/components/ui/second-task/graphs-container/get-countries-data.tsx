import { CountryData } from '@/types/types';
import { useState, useEffect } from 'react';

const useCountriesData = (countryName: string, startYear: string, endYear: string) => {
    const [countriesData, setCountriesData] = useState<CountryData[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const response = await fetch('/static_dataset/fossil-fuel-co2-emissions-by-nation_json.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data: CountryData[] = await response.json();
                console.log(countryName, startYear, endYear);
                let filteredData = data;
                if (countryName !== 'none' && startYear && endYear) {
                    filteredData = filteredData.filter(entry => entry.Country === countryName);
                    filteredData = filteredData.filter(entry => entry.Year >= parseFloat(startYear));
                    filteredData = filteredData.filter(entry => entry.Year <= parseFloat(endYear));
                    setCountriesData(filteredData);
                } else {
                    setCountriesData([]);
                }
                setIsLoading(false);
            } catch (error) {
                console.error('Error loading countries data:', error);
                setCountriesData(null);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [countryName, endYear, startYear]);

    return { countriesData, isLoading };
};

export default useCountriesData;
