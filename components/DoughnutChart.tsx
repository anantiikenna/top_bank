'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        labels: [
          'Bank 1',
          'Bank 2',
          'Bank 3'
        ],
        datasets: [
          {
          label: 'My First Dataset', 
          data: [1250, 2500, 3750],
          backgroundColor: [
            '#0747b6', '#2265d8', '#2f91fa'],
          hoverOffset: 4
        }]
    }

    return <Doughnut 
    data={data} 
    options={{
      cutout: '60%',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
          // position: 'top' as const,
          // labels: {
            // color: '#000',
            // font: {
              // size: 16
            // }
          // }
              }
              }

    }}
    />;
}

export default DoughnutChart;
