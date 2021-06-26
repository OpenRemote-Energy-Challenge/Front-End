import React, {Component} from 'react';
import ReactECharts from 'echarts-for-react';

import buildingSolar from '../../../../../data/energy.json';
import Lib from '../../../../../lib/extractData';

export default class EnergyGeneratedGraphComponent extends Component{
    constructor(props) {
        super(props);

        let graphDataY = Lib.extractData(Lib.getSpecificBuilding(buildingSolar, this.props.building.toString()));
        let graphDataX = Lib.extractTimeStamp(Lib.getSpecificBuilding(buildingSolar, this.props.building.toString()));

        for(let i = 0; i < graphDataX.length; i++)
        {
            graphDataX[i] = graphDataX[i].slice(0, 10);
        }
        graphDataX.sort();

        this.state = {
            options: {
                title: {
                    text: 'Predicted Energy Generated',
                    subtext: props.building.toString(),
                    left: 'center',
                    textStyle:{
                        fontsize: 20,
                        color: 'rgb(255,255,255, 0.5)',
                    },
                    subtextStyle:{
                        fontsize: 15,
                        color: 'rgb(112,128,144, 0.5)',
                        fontStyle: 'italic'
                    }
                },
                legend: {
                    type: 'plain',
                    show: true,
                    align: 'auto',
                    left: 'left',
                    orient: 'vertical',
                    color: 'rgb(255,255,255)'
                },
                xAxis: {
                    type: 'category',
                    data: graphDataX,
                    label: 'Date'
                },
                dataZoom: [
                    {
                        id: 'dataZoomX',
                        type: 'slider',
                        xAxisIndex: [0],
                        filterMode: 'filter',
                    }],
                yAxis: {
                    type: 'value',
                },
                toolbox: {
                    orient: 'horizontal',
                    feature: {
                        restore: {},
                        saveAsImage: {},
                        magicType: {
                            type: ['line', 'bar']
                        }
                    },
                },
                series: [
                    {
                        name: 'UV',
                        data: graphDataY,
                        type: 'line',
                        smooth: true,
                        color: 'rgb(255, 158, 68)',
                        lineStyle: {
                            width: 0
                        },
                        showSymbol: false,
                        areaStyle: {
                            opacity: 0.6,
                        }
                    }
                ],
                tooltip: {
                    trigger: 'axis',
                },
            }
        }
    }


    render(){
        const { options } = this.state;
        return(
            <ReactECharts option={options} />
        )
    }
}