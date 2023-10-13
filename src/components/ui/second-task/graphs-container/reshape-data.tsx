import { CountryData } from "@/types/types";

interface ReshapedData {
    year: number;
    fuelType: string;
    value: string | number;
}

export function reshapeAndFlattenData(countryData: CountryData[]): ReshapedData[] {
    const reshapedData: ReshapedData[][] = countryData.map((entry) => {
        const year = entry.Year;
        const fuelData = Object.keys(entry).reduce<ReshapedData[]>((result, key) => {
            if (key !== "Country" && key !== "Year") {
                result.push({
                    year,
                    fuelType: key,
                    value: entry[key as keyof CountryData],
                });
            }
            return result;
        }, []);
        return fuelData;
    });

    const flattenedData = ([] as ReshapedData[]).concat(...reshapedData);

    return flattenedData;
}

export const findAndReshapeHighestTotalByYear = (countryData: CountryData[]) => {
    if (countryData.length === 0) {
        return [];
    }

    const highestEmissionYear = countryData?.reduce(
        (prev, current) => (prev.Total > current.Total) ? prev : current);

    const reshapedData = Object.entries(highestEmissionYear)
        .filter(([key]) => key !== "Country" && key !== "Year" && key !== "Total")
        .map(([category, value]) => ({
            category,
            value,
        }));
    return { reshapedData: reshapedData, year: highestEmissionYear.Year };
};

