import React, {Component} from 'react';
import '../App.css';
import {Bar} from 'react-chartjs-2';


class StackedBarChart extends Component {
    render() {
        const options= {
            scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
        const data = {
            labels: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun'
            ],
            datasets: [
                {
                    label: 'Blue',
                    data: [300, 50, 100, 500, 120, 250],
                    backgroundColor: "#0b16d3",
                },
                {
                    label: 'Red',
                    data: [100, 100, 75, 300, 25, 100],
                    backgroundColor: "#d31726",
                },
            ],

        }
        return (
            <div className="canvas-container">
                <h1 className='chart-title'>Stacked Bar Chart</h1>
                <article className="canvas-container">
                    <Bar data={data} options={options}/>
                </article>
            </div>
        );
    }
}

export default StackedBarChart;