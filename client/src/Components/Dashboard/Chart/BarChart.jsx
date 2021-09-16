import React from 'react'
import Chart from "react-apexcharts";


import {CardContent,Typography,Card} from '@material-ui/core';


export default function BarChart({series, labels}) {
    
    let state = {
        options: {
            colors: ["#C63B8E",
                "#4C3C90",
                "#D3D65B",
                "#E1A554",
                "#E1535E"],
            stroke: {  curve: 'smooth', },
            yaxis: {labels: {formatter: (value) => { return value+" $" },},},
            chart: {
                id: "area-cart"
            },
            plotOptions: { bar: { columnWidth: '50%', borderRadius: 4 } },

            xaxis: {
                type: "datetime",

            },
            stroke: {
                curve: 'smooth',
            }
        },
        series: [
            {
                name: "Ingresos",
                data: [
                    {x:"1-10-2021 GMT", y:30},
                    {x:"2-10-2021 GMT", y:40},
                    {x:"3-10-2021 GMT", y:20},
                    {x:"4-10-2021 GMT", y:50},
                    {x:"5-10-2021 GMT", y:30},
                    {x:"6-10-2021 GMT", y:50}

            ]
            },

        ]
    };

    return (
        <Card >
            <CardContent>
            <Typography color="textSecondary" gutterBottom variant="h4">Ingresos</Typography>
                <div>
                    <div className="app">
                        <div className="row">
                            <div className="mixed-chart">
                                <Chart
                                    options={state.options}
                                    series={state.series}
                                    type="line"
                                    width="100%"
                                    height="300px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
