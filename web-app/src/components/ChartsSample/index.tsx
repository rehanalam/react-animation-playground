import React, { useState } from "react";
import MockChartComponent from "../Charts/MockChart";
import { mockObservationData1, mockObservationData2, mockObservationData3, mockLineSettings, mockBarSettings } from "./mockdata";
import { ReloadOutlined } from "@ant-design/icons";
import { Button } from "antd";

const ChartsSample = () => {
  const lineChartDatasets = [mockObservationData1, mockObservationData2, mockObservationData3];
  const barChartDatasets = [mockObservationData1, mockObservationData2, mockObservationData3];

  const [currentLineData, setCurrentLineData] = useState(lineChartDatasets[0]);
  const [currentBarData, setCurrentBarData] = useState(lineChartDatasets[1]);

  const getRandomIndex = (length: number, excludeIndex: number): number => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * length);
    } while (randomIndex === excludeIndex); // Ensure a different index
    return randomIndex;
  };
  
  const handleLineRefresh = () => {
    setCurrentLineData((prevData) => {
      const currentIndex = lineChartDatasets.indexOf(prevData);
      const newIndex = getRandomIndex(lineChartDatasets.length, currentIndex);
      return lineChartDatasets[newIndex];
    });
  };

  const handleBarRefresh = () => {
    setCurrentBarData((prevData) => {
        const currentIndex = lineChartDatasets.indexOf(prevData);
        const newIndex = getRandomIndex(lineChartDatasets.length, currentIndex);
        return lineChartDatasets[newIndex];
      });
  };


  return (
    <div className="h-fit w-full flex items-center justify-center p-20 gap-4">
    <div className="w-full h-[80vh] rounded-xl border border-gray-300 bg-white-base p-8 flex flex-col  justify-center">
    <MockChartComponent data={currentLineData} settings={mockLineSettings} />
     
    <Button onClick={handleLineRefresh} type="primary" className="mt-4 w-[200px] mx-auto"><ReloadOutlined className="text-lg " /> Refresh Chart</Button>
    </div>

     <div className="w-full h-[80vh] rounded-xl border border-gray-300 bg-white-base p-8 flex flex-col  justify-center">
    <MockChartComponent data={currentBarData} settings={mockBarSettings} />
     
     <Button onClick={handleBarRefresh} type="primary" className="mt-4  w-[200px] mx-auto"><ReloadOutlined className="text-lg " /> Refresh Chart</Button>
     </div>
    </div>
  );
};

export default ChartsSample;
