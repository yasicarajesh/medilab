import React from 'react';
import { Bar } from 'react-chartjs-2';
//import Cookies from 'js-cookie';
//import { render } from '@testing-library/react';
class Chart extends React.Component {

    constructor(props) {

        super(props);

        this.cData1 = {
            labels: ['March', 'April', 'May'],
            datasets: [
                {
                    label: 'Overall Growth',
                    data: [
                        90,
                        120,
                        1456],
                    backgroundColor: [
                        'rgba(255,99,132,0.6)',
                        'rgba(54,162,235,0.6)',
                        'rgba(255,206,86,0.6)'
                    ]
                }
            ],
            scales: {
                yAxes: [{
                    ticks: { beginAtZero: true }
                }]
            }
        };
        this.cData2 = {
            labels: ['March', 'April', 'May'],
            datasets: [
                {
                    label: 'Individual Performance',
                    data: [
                        80,
                        70,
                        145],
                    backgroundColor: [
                        'rgba(255,99,132,0.6)',
                        'rgba(54,162,235,0.6)',
                        'rgba(255,206,86,0.6)'
                    ]
                }
            ],
            scales: {
                yAxes: [{
                    ticks: { beginAtZero: true }
                }]
            }
        };
        this.cData3 = {
            labels: ['March', 'April', 'May'],
            datasets: [
                {
                    label: 'Team Performance',
                    data: [
                        180,
                        100,
                        145],
                    backgroundColor: [
                        'rgba(255,99,132,0.6)',
                        'rgba(54,162,235,0.6)',
                        'rgba(255,206,86,0.6)'
                    ]
                }
            ],
            scales: {
                yAxes: [{
                    ticks: { beginAtZero: true }
                }]
            }
        };
        this.state = {
            chartData1: this.cData1,
            chartData2: this.cData2,
            chartData3: this.cData3,
            a1: "",
            a2: "",
            a3: "",
            a4: "",
            a5: "",
            a6: "",
            a7: "",
            a8: "",
            a9: ""
        }
    }
    handleClick1() {
        this.cData1.datasets[0].data = [Number(this.state.a1), Number(this.state.a2), Number(this.state.a3)];
        this.setState({
            chartData1: this.cData1
        })
    }
    handleClick2() {
        this.cData2.datasets[0].data = [Number(this.state.a4), Number(this.state.a5), Number(this.state.a6)];
        this.setState({
            chartData2: this.cData2
        })
    }
    handleClick3() {
        this.cData3.datasets[0].data = [Number(this.state.a7), Number(this.state.a8), Number(this.state.a9)];
        this.setState({
            chartData3: this.cData3
        })
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    render() {

        return (
            <div class="App1">
                <section class="emp-details">
                    <div class="info">
                        Name: <span>Yasica</span>
                    </div>
                    <div class="info">
                        Posting: <span>Senior Doctor</span>
                    </div> 
                    <div class="info">
                        ID: <span>E12341</span>
                    </div>        
                </section>
                <div class="App">
                    <section class="charts">
                        <div class="chart-graph">
                            <Bar
                                data={this.state.chartData1}
                                options={{}}
                            />
                            <input type="text" name="a1" onChange={this.handleChange.bind(this)} />
                            <input type="text" name="a2" onChange={this.handleChange.bind(this)} />
                            <input type="text" name="a3" onChange={this.handleChange.bind(this)} />
                            <button type="button" onClick={this.handleClick1.bind(this)}>
                                submit
                            </button>

                        </div>
                        <div class="chart-graph">
                            <Bar
                                data={this.state.chartData2}
                                options={{}}
                            />
                            <input type="text" name="a4" onChange={this.handleChange.bind(this)} />
                            <input type="text" name="a5" onChange={this.handleChange.bind(this)} />
                            <input type="text" name="a6" onChange={this.handleChange.bind(this)} />
                            <button type="button" onClick={this.handleClick2.bind(this)}>
                                submit
                            </button>

                        </div>
                        <div class="chart-graph">
                            <Bar
                                data={this.state.chartData3}
                                options={{}}
                            />
                            <input type="text" name="a7" onChange={this.handleChange.bind(this)} />
                            <input type="text" name="a8" onChange={this.handleChange.bind(this)} />
                            <input type="text" name="a9" onChange={this.handleChange.bind(this)} />
                            <button type="button" onClick={this.handleClick3.bind(this)}>
                                submit
                            </button>

                        </div>
                    </section>
                    <aside class="personal-info">
                        <div class="salary">
                            Current salary: <span class="vsalary">5,00,000/annum</span>
                        </div>
                        <div class="due">
                            Due Holidays in month: <span class="vdue">24 days</span>
                        </div>
                        <div class="ptasks">
                            Pending Task: <span class="vptasks">12</span>
                        </div>
                        <div class="ctasks">
                            Completed Task: <span class="vctasks">3</span>
                        </div>
                    </aside>
                </div>
            </div>
            
        );

    }
}
export default Chart;