"use client";
import React, { useState, useEffect } from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
} from "recharts";

interface DataItem {
  date: string;
  productSales: number;
}

interface FilterButtonsProps {
  onClickFilter: (filter: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ onClickFilter }) => (
  <div>
    <button onClick={() => onClickFilter("oneMonth")}>One Month</button>
    <button onClick={() => onClickFilter("sixMonths")}>Six Months</button>
    <button onClick={() => onClickFilter("oneYear")}>One Year</button>
  </div>
);

const Chart = () => {
  const [filteredData, setFilteredData] = useState<DataItem[]>([]);

  const generateDates = (days: number) => {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    const dates: string[] = [];
    for (let i = 0; i < days; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() + i);
      dates.push(date.toLocaleDateString());
    }
    return dates;
  };

  const generateData = (days: number) => {
    const dates = generateDates(days);
    let previousSales = 3000;
    const data: DataItem[] = [];
    for (const date of dates) {
      const maxChange = Math.min(previousSales * 0.1, 500);
      const minSales = Math.max(previousSales - maxChange, 1000);
      const maxSales = Math.min(previousSales + maxChange, 6000);
      const newSales =
        Math.floor(Math.random() * (maxSales - minSales + 1)) + minSales;
      data.push({ date, productSales: newSales });
      previousSales = newSales;
    }
    return data;
  };

  useEffect(() => {
    const data = generateData(365);
    setFilteredData(data);
  }, []);

  const handleFilter = (filter: string) => {
    let newData = [...filteredData];

    switch (filter) {
      case "oneMonth":
        newData = newData.slice(-30);
        break;
      case "sixMonths":
        newData = newData.slice(-180);
        break;
      case "oneYear":
        newData = generateData(365);
        break;
      default:
        break;
    }

    setFilteredData(newData);
  };

  return (
    <div>
      <FilterButtons onClickFilter={handleFilter} />
      <AreaChart
        width={1000}
        height={500}
        data={filteredData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis yAxisId="left" />
        <Tooltip />
        <Legend />
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="productSales"
          fill="url(#colorGradient)" // Reference the gradient using its ID
          stroke="#8884d8"
          dot={false}
          yAxisId="left"
        />
      </AreaChart>
    </div>
  );
};

export default Chart;
