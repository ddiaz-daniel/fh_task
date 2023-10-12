'use client';
import React from 'react';
import useCountriesList from '../get-countries';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useCountryFilter } from '@/components/context/countries-context';


const FilterCard: React.FC = () => {
    const countriesList = useCountriesList().countriesData;

    const { selectedCountry, setSelectedCountry,
        setSelectedStartYear, setSelectedEndYear } = useCountryFilter();

    return (
        <section className="w-3/12 ">
            <div className="p-4 bg-white rounded shadow-md text-black flex flex-col mt-20">
                <h2 className="text-2xl font-bold mb-4">Filter Section</h2>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-black">Start Date:</label>
                    <DatePicker
                        selected={new Date()}
                        onChange={(date) => {
                            if (date) {
                                const year = date.getFullYear();
                                setSelectedStartYear(year.toString());
                            }
                        }}
                        showYearPicker
                        dateFormat="yyyy"
                        className="border p-2 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-black">End Date:</label>
                    <DatePicker
                        selected={new Date()}
                        onChange={(date) => {
                            if (date) {
                                const year = date.getFullYear();
                                setSelectedEndYear(year.toString());
                            }
                        }}
                        showYearPicker
                        dateFormat="yyyy"
                        className="border p-2 rounded"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-black">Country:</label>
                    <select
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        className="border p-2 rounded-md w-8/12 text-black"
                    >
                        <option value="">All</option>
                        {countriesList &&
                            countriesList.map((country, index) => (
                                <option key={index} value={country.country}>
                                    {country.country}
                                </option>
                            ))}
                    </select>
                </div>
            </div>
        </section>
    );
};

export default FilterCard;
