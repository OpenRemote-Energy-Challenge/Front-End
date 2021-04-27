import Chart from "chart.js/auto"
import React from "react";

import '../../../styles/powergraph.component.css';

var myChart;

const MainGraph = () => {
    let ctx = document.getElementById("maingraph");

    if(myChart)
    {
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Power Generated Today (kW)', 'Power Used Today (kW)', 'Estimated Time Left (H)'],
            datasets: [{
                label: '# of Votes',
                data: [20, 10, 12],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    return(
        <div className="chart-container">
            <canvas id={"maingraph"}></canvas>
        </div>
    )

}

export default MainGraph;