import { CountryData } from "@/types/types";
import { VegaLite, VisualizationSpec } from "react-vega";
import { findAndReshapeHighestTotalByYear } from "./reshape-data";

interface PieChartProps {
    countryData: CountryData[];
}

const PieChart: React.FC<PieChartProps> = ({ countryData }) => {

    const { reshapedData, year } = findAndReshapeHighestTotalByYear(countryData) as { reshapedData: { category: string; value: string | number; }[]; year: number; };

    if (!reshapedData) {
        return null;
    }
    const defaultSpec: VisualizationSpec = {
        title: `CO2 emissions by category for the year : ${year}`,
        data: {
            values: reshapedData,
        },
        mark: "arc",
        encoding: {
            "theta": { "field": "value", "type": "quantitative" },
            "color": { "field": "category", "type": "nominal" },
            "tooltip": [
                { "field": "category", "title": "Category" },
                { "field": "value", "title": "Value" },
            ],
        },
    };

    return <VegaLite spec={defaultSpec} />;
};

export default PieChart;
