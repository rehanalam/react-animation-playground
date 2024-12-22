import React, { useState } from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface Question {
  id: number;
  text: string;
  value: number; // Slider value (1-5)
}

interface QuestionSliderProps {
  questions: Question[];
}

const QuestionSlider: React.FC<QuestionSliderProps> = ({ questions }) => {
  const [answers, setAnswers] = useState<Question[]>(
    questions.map((q) => ({ ...q, value: 3 })) // Default value for all sliders
  );

  const handleSliderChange = (id: number, value: number) => {
    setAnswers((prevAnswers) =>
      prevAnswers.map((q) => (q.id === id ? { ...q, value } : q))
    );
  };

  // Chart.js Data for Graph
  const chartData = {
    labels: answers.map((q) => q.text),
    datasets: [
      {
        label: 'Responses',
        data: answers.map((q) => q.value),
        backgroundColor: [
          '#4caf50',
          '#2196f3',
          '#ff9800',
          '#f44336',
          '#9c27b0',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 5,
      },
    },
  };

  return (
    <div className="flex h-screen w-[80%] items-center justify-center mx-auto">
      <div className="p-5 flex flex-1 items-center justify-end">
        <div className="w-full h-[80vh] rounded-xl border border-gray-300 bg-white-base p-5 ">
          <div style={{ height: '400px' }}>
            {/* <Bar data={chartData} options={chartOptions} /> */}
            {answers.map((q) => (
              <div className="mt-10">
                {q.value}
                <RangeSlider
                  className="single-thumb"
                  defaultValue={[0, q.value]}
                  thumbsDisabled={[true, false]}
                  rangeSlideDisabled={true}
                  max={5}
                  // value={q.value}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex-2 p-5">
          <div className="w-full h-[80vh] rounded-xl border border-gray-300 bg-white-base p-5">
            {answers.map((q) => (
              <div key={q.id} style={{ margin: '20px 0' }}>
                <label
                  htmlFor={`slider-${q.id}`}
                  style={{ display: 'block', marginBottom: '5px' }}
                >
                  {q.text}
                </label>
                <input
                  type="range"
                  id={`slider-${q.id}`}
                  min="1"
                  max="5"
                  value={q.value}
                  onChange={(e) =>
                    handleSliderChange(q.id, Number(e.target.value))
                  }
                  style={{ width: '100%' }}
                />
                <p style={{ textAlign: 'right', marginTop: '5px' }}>
                  Selected: {q.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionSlider;
