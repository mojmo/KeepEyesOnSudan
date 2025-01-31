import { useState, useEffect } from "react";
import Papa from "papaparse";
import { LineChart, CartesianGrid, Line, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import data from "@data/genders.json";

const StatisticsChart = () => {

    const [csvData, setCsvData] = useState([]);

    const formattedData = data.map((entry) => ({
        Country: entry.Country,
        Girls: parseFloat(entry.Girls.replace("%", "")),  
        Boys: parseFloat(entry.Boys.replace("%", "")),  
        Women: parseFloat(entry.Women.replace("%", "")),  
        Men: parseFloat(entry.Men.replace("%", "")),  
    }));

    useEffect(() => {
        const fetchCSV = async () => {
            const response: any = await fetch("src/data/refugees.csv");
            const reader = response.body.getReader();
            const result = await reader.read();
            const text = new TextDecoder("utf-8").decode(result.value);

            Papa.parse(text, {
                header: true,
                dynamicTyping: true,
                complete: (parsedData: any) => {
                    setCsvData(parsedData.data);
                },
            });
        };

        fetchCSV();
    }, []);

    return (
        <div className="chart-container">
            <div className="chart-item" style={{ width: "100%", height: window.innerWidth < 600 ? 300 : 400, marginBottom: "200px" }}>
                <h3>Refugee Trends Over Time</h3>
                <p>This chart shows the refugee influx from different countries over time.</p>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={csvData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid vertical={false} horizontal={true} strokeDasharray="3 3" />
                        <XAxis
                            dataKey="Date"
                            interval={window.innerWidth < 600 ? 200 : 100}
                            angle={window.innerWidth < 600 ? -45 : 0}
                            textAnchor="end"
                        />
                        <YAxis tickFormatter={(value) => `${value / 1_000_000}M`} axisLine={false} tickLine={false} />
                        <Tooltip />
                        <Legend wrapperStyle={{ paddingTop: "50px", fontSize: "0.8rem" }} />
                        <Line type="linear" dataKey="Ethiopia" stroke="#8884d8" dot={false} />
                        <Line type="linear" dataKey="South Sudan" stroke="#82ca9d" dot={false} />
                        <Line type="linear" dataKey="CAR" stroke="#003049" dot={false} />
                        <Line type="linear" dataKey="Chad" stroke="#669BBC" dot={false} />
                        <Line type="linear" dataKey="Egypt" stroke="#1E1E1E" dot={false} />
                        <Line type="linear" dataKey="Uganda" stroke="#5f0f95" dot={false} />
                        <Line type="linear" dataKey="Libya" stroke="#fadc56" dot={false} />
                        <Line type="linear" dataKey="TOTAL" stroke="#C1121F" dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="chart-item" style={{ width: "100%", height: window.innerWidth < 600 ? 300 : 400 }}>
                <h3>Demographic breakdown of Sudanese Refugees</h3>
                <p>The chart presents gender distribution among Sudanese refugees in neighboring countries.</p>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={formattedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Country" />
                        <YAxis tickFormatter={(value) => `${value}%`} />
                        <Tooltip formatter={(value) => `${value}%`} />
                        <Legend />
                        <Bar dataKey="Girls" stackId="a" fill="#C1121F" />
                        <Bar dataKey="Boys" stackId="a" fill="#669BBC" />
                        <Bar dataKey="Women" stackId="a" fill="#5f0f95" />
                        <Bar dataKey="Men" stackId="a" fill="#003049" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default StatisticsChart;