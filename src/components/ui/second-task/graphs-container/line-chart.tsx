import { CountryData } from "@/types/types";
import { VegaLite, VisualizationSpec } from "react-vega";
import { reshapeAndFlattenData } from "./reshape-data";

interface LineChartProps {
    countryData: CountryData[];
}
const LineChart: React.FC<LineChartProps> = ({ countryData }) => {
    const flattenedData = reshapeAndFlattenData(countryData);

    const defaultSpec = {
        title: `Emmisions by fuel type in ${countryData[0].Country}`,
        data: {
            name: "table",
            values: flattenedData,
        },
        mark: "line",
        encoding: {
            x: { field: "year", type: "ordinal", title: "Year" },
            y: { field: "value", type: "quantitative", title: "Value" },
            color: {
                field: "fuelType",
                type: "nominal",
                title: "Fuel Type",
            },
        },
    } as VisualizationSpec;

    return <VegaLite spec={defaultSpec} />;
};

export default LineChart;
