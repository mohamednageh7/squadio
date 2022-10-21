import React, { useState ,useEffect} from "react";
import Grid from "@mui/material/Grid";
import Chart from "react-apexcharts";
import { options ,dataFormat} from "./optionsData";
import { useSelector } from "react-redux";
import { filterSelector } from "../../../redux/dataGraph/selector";

type Props = {

};

const FilterData: React.FC<Props> = () => {
    const {data} = useSelector(filterSelector)
    const [graphData,setGraphData] = useState<any>([])
    useEffect(() => {
        setGraphData(dataFormat(data))
    },[data])
  return (
    <Grid container p="1em" m="1em" sx={{ border: "1px solid #ccc" }}>
      <Grid item  xs={12}>
      <div id="chart">
      <Chart  options={options} series={graphData} type="candlestick" height={350} />
    </div>
      </Grid>
    </Grid>
  );
};

export default FilterData;
