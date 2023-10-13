"use client";
import { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for the context
type CountriesContextType = {
    selectedCountry: string;
    setSelectedCountry: (country: string) => void;
    selectedStartYear: string;
    setSelectedStartYear: (year: string) => void;
    selectedEndYear: string;
    setSelectedEndYear: (year: string) => void;
};

const CountriesFilterContext = createContext<CountriesContextType | undefined>(undefined);

export function CountriesFilterProvider({ children }: { children: ReactNode; }) {
    const [selectedCountry, setSelectedCountry] = useState<string>('GERMANY');
    const [selectedStartYear, setSelectedStartYear] = useState<string>('1980');
    const [selectedEndYear, setSelectedEndYear] = useState<string>('2023');

    return (
        <CountriesFilterContext.Provider value={{
            selectedCountry, setSelectedCountry,
            selectedStartYear, setSelectedStartYear,
            selectedEndYear, setSelectedEndYear
        }}>
            {children}
        </CountriesFilterContext.Provider>
    );
}

export function useCountryFilter() {
    const context = useContext(CountriesFilterContext);
    if (context === undefined) {
        throw new Error('useCountrySelection must be used within a CountriesFilterProvider');
    }
    return context;
}
