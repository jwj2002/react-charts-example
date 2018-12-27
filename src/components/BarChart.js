import React, {Component} from 'react';
import '../App.css';
import {Bar} from 'react-chartjs-2';


class BarChart extends Component {
    render() {
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
                    label: 'Green',
                    data: [300, 50, 100, 500, 120, 250],
                    backgroundColor: "#24d324",
                },
                {
                    label: 'Yellow',
                    data: [100, 100, 75, 300, 25, 100],
                    backgroundColor: "#d3d11a",
                },
            ],

        }
        return (
            <div className="canvas-container">
                <h1 className='chart-title'>Bar Chart</h1>
                <article className="canvas-container">
                    <Bar data={data} />
                </article>
            </div>
        );
    }
}

export default BarChart;