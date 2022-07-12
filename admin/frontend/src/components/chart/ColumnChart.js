import Chart from 'react-apexcharts';
import React from 'react';
import "./collumnChart.css"

function ColumnChart() {
    const state = {
        series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58]
        }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105]
        }, {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                width: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '70%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            },
            yaxis: {
                title: {
                    text: '$ (thousands)'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        },

    };


    return (
        <div className="columnChart">
            <div className="columnChart-wrapper">
                <p>Conversions This Year</p>
                <div className="columnChart-center">
                    <Chart options={state.options} series={state.series} type="bar" height={240} width={550}/>
                </div>
            </div>
        </div>
    )

}

export default ColumnChart;