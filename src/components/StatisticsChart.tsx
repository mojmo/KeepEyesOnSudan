import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import data from "@data/genders.json";

const StatisticsChart = () => {

    // Convert string percentages (e.g., "32.00%") to numbers (e.g., 32)
    const formattedData = data.map((entry) => ({
        Country: entry.Country,
        Girls: parseFloat(entry.Girls.replace("%", "")),  
        Boys: parseFloat(entry.Boys.replace("%", "")),  
        Women: parseFloat(entry.Women.replace("%", "")),  
        Men: parseFloat(entry.Men.replace("%", "")),  
    }));

    return (
        <div style={{ width: "100%", height: 400 }}>
            <h3>Demographic breakdown of Sudanese Refugees</h3>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={formattedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="Country" />
                    <YAxis tickFormatter={(value) => `${value}%`} />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Legend />
                    <Bar dataKey="Girls" fill="#C1121F" />
                    <Bar dataKey="Boys" fill="#669BBC" />
                    <Bar dataKey="Women" fill="#5f0f95" />
                    <Bar dataKey="Men" fill="#003049" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default StatisticsChart;
