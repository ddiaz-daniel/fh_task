'use client';
import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useCountryFilter } from '@/components/context/countries-context';
import useCountriesData from './get-countries-data';
import LineChart from './line-chart';
import PieChart from './pie-chart';

const GraphsContainer: React.FC = () => {

    const { selectedCountry, selectedStartYear, selectedEndYear } = useCountryFilter();
    const countryData = useCountriesData(selectedCountry, selectedStartYear, selectedEndYear).countriesData;
    const highestEmissionYear = countryData?.reduce((prev, current) => (prev.Total > current.Total) ? prev : current);

    if (!countryData || countryData.length === 0) {
        return <div className="container flex flex-row w-2/3 bg-slate-200 my-4 rounded h-fit">
            <p className="text-2xl font-bold text-black w-full text-center p-8">No Data Available</p>
        </div>;
    }


    return (
        <div className="container flex flex-col w-2/3 bg-slate-200 my-8 py-8 rounded h-fit p-8">
            <h2 className="text-2xl font-bold text-black w-full text-center">CO2 Emissions by Fuel Type</h2>
            <h2 className="text-xl font-bold text-black w-full text-center">
                {selectedCountry}{" "}{selectedStartYear}{" - "}{selectedEndYear}
            </h2>
            <div className="py-8 self-center flex flex-row">
                <div className="flex flex-col w-1/3 justify-center mr-16">
                    {highestEmissionYear && <p className="text-xl font-normal text-black w-full text-left">
                        {highestEmissionYear.Year} was the year with the highest emissions with a total of {highestEmissionYear.Total}t of CO2</p>
                    }
                </div>
                <PieChart countryData={countryData} />
            </div>
            <div className="py-8 self-center">
                <LineChart countryData={countryData} />
            </div>

        </div>

    );

};

export default GraphsContainer;