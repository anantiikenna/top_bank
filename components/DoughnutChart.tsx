'use client'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const accountNames = accounts.map((a) => a.name );
  const balances = accounts.map((a) => a.currentBalance);

    const data = {
        labels: accountNames,
        datasets: [
          {
          label: 'Banks', 
          data: balances ,
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
