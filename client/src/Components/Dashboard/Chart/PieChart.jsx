import React from 'react'
import Chart from "react-apexcharts";
import {CardContent,Typography,Card} from '@material-ui/core';

export default function PieChart({series, labels}) {
 
    let  options= {
       labels: labels,
       colors: ["#C63B8E",
                "#4C3C90",
                "#D3D65B",
                "#E1A554",
                "#E1535E"],
       legend: {position: 'bottom'}
        }

    return (
        <div>
            <Card >
            <CardContent>
            <Typography color="textSecondary" gutterBottom variant="h4">Propiedades</Typography>
                <div>
                    <div className="app">
                        <div className="row">
                            <div className="mixed-chart">
                                <Chart
                                    options={options}                           
                                    series={series}
                                    type= 'pie'
                                    width="100%"
                                    height="300px"

                                />
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
        </div>
    )
}
