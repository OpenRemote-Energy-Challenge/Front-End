import Chart from "chart.js/auto"
import React from "react";

import '../../../styles/powergraph.component.css';
import Data from '../../../getData.json';
import Library from "../../../lib/arraySplit.lib";
import Extract from '../../../lib/extractData';

var myChart;
var graphDataY = [];
var graphDataX = [];

const MainGraph = () => {
    let ctx = document.getElementById("maingraph");
    let data = Library.sortArrayByItem(Data);
    //let graphDataY = Extract.extractData(data[1]);
    //let graphDataX = Extract.extractDataX(data[1]);

    console.log(data[1].length)

    for(var i = 0; i < 500; i++){
        let date = new Date(data[1][i]['timestamp'].slice(0, 10));

        if(date.getMonth() === 2){
            graphDataX.push(date);
            let value = data[1][i]['value'];
            graphDataY.push(value);
        }
    }

    if(myChart)
    {
        myChart.destroy();
    }

    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: graphDataX,
            datasets: [{
                label: 'Tamar Building Solar Power Produced',
                data: graphDataY,
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: [{
                    title: {
                        display: true,
                        text: "Power Produced"
                    },
                    beginAtZero: true
                }]
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