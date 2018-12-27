import React, {Component} from 'react';
import '../App.css';
import DoughnutChart2 from './DoughnutChart';
import LineChart from './LineChart';
import BarChart from './BarChart';
import StackedBarChart from './StackedBarChart';
import HorizontalBarChart from './HorizontalBarChart';

class App extends Component {
    render() {
        return (
            <div className="main">
                <LineChart />
                <DoughnutChart2 />
                <BarChart />
                <HorizontalBarChart />
                <StackedBarChart />
            </div>
        );
    }
}

export default App;
