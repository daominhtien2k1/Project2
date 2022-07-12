import Chart from 'react-apexcharts';
import React from 'react';
import "./donutChart.css"

function DonutChart() {
    const state = {
        series: [2, 4, 5],
        options: {
            labels: ["Apple", "Banana", "Grapes"],
            plotOptions: {
                pie: {
                    expandOnClick: false,
                    donut: {
                        size: "50px",
                        labels: {
                            show: true,
                            showAlways: true,
                            fontSize: "24px",
                            color: '#2787AB'
                        }
                    }
                }
            }
        }
    };


    return (
        <div className="donutChart">
            <div className="donutChart-wrapper">
                <p>Top Revenue Product</p>
                <div className="donutChart-center">
                    <Chart options={state.options} series={state.series} type="donut" width="380"/>
                </div>
            </div>
        </div>
    )

}

export default DonutChart;