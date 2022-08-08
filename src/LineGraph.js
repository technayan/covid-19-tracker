

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
)

const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: false,
          },
        },
}


function LineGraph ({casesData}) {

  const formatedData = {
    labels: Object.keys(casesData.cases),
    datasets: [
    {
        fill: true,
        label: 'Cases',
        data: Object.values(casesData.cases),
        borderColor: '#cc1034',
        backgroundColor: 'rgba(204, 16, 52, 0.2)',
    }
    ],
  }

  
    return (
        <div style={{marginTop: '20px'}}>
          <Line data={formatedData} options={options} />
        </div>
    );
};

export default LineGraph;