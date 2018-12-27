import React, {Component} from 'react';
import '../App.css';
import {Doughnut} from 'react-chartjs-2';


class DoughnutChart2 extends Component {
    render() {
        const data = {
            labels: [
                'Red',
                'Green',
                'Yellow',
                'Grey',
                'Dark Grey'

            ],
            datasets: [
                {
                    data: [300, 50, 100, 500, 120],
                    backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                    hoverBackgroundColor: [
                        "#FF5A5E",
                        "#5AD3D1",
                        "#FFC870",
                        "#A8B3C5",
                        "#616774"
                    ]
                }
            ]
        }
        return (
            <div className="canvas-container">
                <h1 className='chart-title'>Doughnut Chart</h1>
                <article className="canvas-container">
                    <Doughnut data={data}/>
                </article>
            </div>
        );
    }
}

export default DoughnutChart2;