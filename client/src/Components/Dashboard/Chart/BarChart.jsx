import React from "react";
import Chart from "react-apexcharts";

import { CardContent, Typography, Card } from "@material-ui/core";

export default function BarChart({ payList, labels }) {
  let ingressArray = [];

  ingressArray = segmentInMonth(payList, ingressArray);

  function segmentInMonth(array, segmentArray) {
    if (segmentArray.length < 12) {
      for (let i = 0; i < 12; i++) {
        segmentArray.push({ x: `${i + 1}-10-2021 GMT`, y: 0 });
      }
    }

    array.forEach((element) => {
      if (element.date) {
        const month = new Date(element.date).getMonth();
        const year = new Date(element.date).getFullYear();

        if (element.amount > 0) {
          segmentArray[month] = {
            x: `${month + 1}-01-${year} GTM`,
            y: segmentArray[month].y + 1 * element.amount,
          };
        }
      }
    });

    return segmentArray;
  }

  let state = {
    options: {
      dataLabels: {
        formatter: (v) => `$ ${new Intl.NumberFormat().format(Math.abs(v))}`,
      },
      colors: ["#C63B8E", "#4C3C90", "#D3D65B", "#E1A554", "#E1535E"],
      stroke: { curve: "smooth" },
      yaxis: {
        labels: {
          formatter: (value) => {
            return value + " $";
          },
        },
      },
      chart: {
        id: "area-cart",
      },
      plotOptions: { bar: { columnWidth: "50%", borderRadius: 4 } },

      xaxis: {
        type: "datetime",
      },
    },
    series: [
      {
        data: ingressArray,
      },
    ],
  };

  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom variant="h4">
          Ingresos
        </Typography>
        <div>
          <div className="app">
            <div className="row">
              <div className="mixed-chart">
                <Chart
                  options={state.options}
                  series={state.series}
                  type="area"
                  width="100%"
                  height="300px"
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
