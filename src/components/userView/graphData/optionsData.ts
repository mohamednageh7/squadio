export const dataFormat: (data: []) => ApexAxisChartSeries = (data: []) => {
  let myData: any[] = [];

  data.map((item: any) => {
    let date = item.shift();
    let formatter = {
      x: new Date(date),
      y: item.map((num: any) => Number(num)),
    };
    myData.push(formatter);
  });
  let result = [
      {
          data:myData
      }
  ]
  return result;
};

export const options: ApexCharts.ApexOptions | undefined = {
  chart: {
    type: "candlestick",
    height: 350,
  },
  title: {
    text: "CandleStick Chart",
    align: "left",
  },
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
  },
};
