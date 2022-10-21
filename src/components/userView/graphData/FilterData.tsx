import React from "react";
import Grid from "@mui/material/Grid";
import Chart from "react-apexcharts";
import { options ,data} from "./optionsData";

type Props = {

};

const FilterData: React.FC<Props> = () => {

  return (
    <Grid container p="1em" m="1em" sx={{ border: "1px solid #ccc" }}>
      <Grid item  xs={12}>
      <div id="chart">
      <Chart  options={options} series={data} type="candlestick" height={350} />
    </div>
      </Grid>
    </Grid>
  );
};

export default FilterData;
