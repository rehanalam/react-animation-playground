import { useEffect, useMemo, useRef, useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ScriptableContext,
} from 'chart.js';
import dayjs from 'dayjs';
import SeriesModule from '../../utils/modules/series';
import moment from 'moment';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export interface IChartData {
  date: string;
  value: string;
}

interface IChartProps {
  data: IChartData[];
  settings: SeriesModule.IChartSettings;
}

var formatDate = (dateString: string) => {
  return dayjs(dateString).format('YYYY');
};

const MockChartComponent = ({ data, settings }: IChartProps) => {
  const chartRef = useRef<any>(null);
  const [gradientFill, setGradientFill] = useState<CanvasGradient | undefined>(undefined); // State for gradient fill

  // Processing data to convert string values to numbers
  const values = useMemo(
    () =>
      data.map((item) =>
        item.value === '.' ? 0 : parseFloat(item.value)
      ),
    [data]
  );

  // Inverse dataset calculation (for bar chart)
  const inverseValues = useMemo(() => {
    return values.map(value => value * -1); // Inverse of the original data
  }, [values]);

  const generateGradient = (context: ScriptableContext<"line">) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, "rgba(250,174,50,1)");
            gradient.addColorStop(1, "rgba(250,174,50,0)");
            return gradient;
          }

  // Chart data structure
  const chartData = () => {
    return {
        labels: data.map((item) => item.date),
        datasets: [
          {
            label: settings.title,
            data: values,
            // fill: true,
            // backgroundColor: gradientFill, // Use the gradient fill
            // borderColor:
            //   settings.chartType === 'line' ? settings.lineColor : undefined,
            borderDash:
              settings.chartType === 'line' && settings.lineStyle === 'dotted'
                ? [5, 5]
                : settings.lineStyle === 'dashed'
                ? [10, 10]
                : [],
            tension: settings.chartType === 'line' ? 0.3 : 0,
            pointRadius: 0, // Hide points
            pointHoverRadius: 0, // Hide points on hover
            // fillStyle: gradientFill,
            // fillRect: '20, 20, 200, 100',
            fill: "start",
            borderColor: "rgba(75,192,192,1)",

            backgroundColor: (context: ScriptableContext<"line" | "bar">) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(500, 0, 100, 0);
                gradient.addColorStop(0, "rgba(250,174,50,1)");
                gradient.addColorStop(1, "rgba(250,174,50,0)");
                return gradient;
              }
              
            
          },
          // Add the inverse dataset for bar chart
          ...(settings.chartType === 'bar'
            ? [
                {
                  label: 'Inverse Data', // Label for the second dataset
                  data: inverseValues,
                  backgroundColor: '#8C78EA', // Blue color for the inverse dataset
                  borderColor: '#8C78EA', // Blue border color for inverse
                  borderWidth: 1, // Border width for inverse dataset
                },
              ]
            : []),
        ],
      };
  }
  

  useEffect(() => {
    const chartInstance = chartRef.current?.chartInstance;
    if (chartInstance) {
      const ctx = chartInstance.ctx;
      if (ctx) {
        // Create the gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, '#FF80AA'); // Start color
        gradient.addColorStop(1, '#FF3F3D'); // End color
        setGradientFill(gradient); // Set the gradient using state
      }
    }
  }, [data]); // Only re-run when `data` changes

  // Chart options for styling
  const chartOptions = {
    title: {
      color: '#9ca3af',
      display: false,
    },
    scales: {
      y: {
        title: {
          display: false,
          text: settings.yAxisLabel,
          color: '#9ca3af',
        },
        ticks: {
          color: '#9ca3af',
          
        },
        grid: {
          display: false,
        },
      },
      x: {
        ticks: {
          color: '#9ca3af',
          maxTicksLimit: 5,
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="w-full h-[500px]">
      {settings.chartType === 'line' ? (
        <Line
          ref={chartRef}
          data={chartData()}
          options={chartOptions}
          width="100%"
          height="75%"
        />
      ) : (
        <Bar
          ref={chartRef}
          data={chartData()}
          options={chartOptions}
          width="100%"
          height="75%"
        />
      )}
    </div>
  );
};

export default MockChartComponent;
