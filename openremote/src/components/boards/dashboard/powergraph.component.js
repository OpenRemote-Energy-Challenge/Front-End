import Chart from "chart.js/auto"
import React from "react";

import '../../../styles/powergraph.component.css';
import Data from '../../../getData.json';
import Library from "../../../lib/arraySplit.lib";
import Extract from '../../../lib/extractData';

var myChart;

const MainGraph = () => {
    let ctx = document.getElementById("maingraph");
    let data = Library.sortArrayByItem(Data);
    let graphData = Extract.extractData(data[1]);
    console.log(graphData)

    if(myChart)
    {
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Power', 'Energy'],
            datasets: [{
                label: 'Solar Power Details',
                data: graphData,
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