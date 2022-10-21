import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import SelectInput from "../../../coreUI/SelectInput";
import { selectData } from "./selectData";
import Button from "@mui/material/Button";
import { DataContext } from "../DataViewWrapper";
import DatePicker from "../../../coreUI/DatePicker";
import Typography from "@mui/material/Typography";

type Props = {};

const Filter: React.FC<Props> = () => {
  const [handleChangeData, handleFilterData, filter, error] =
    useContext(DataContext);
  return (
    <Grid container justifyContent={"center"} spacing={4}>
      {selectData({
        options: [
          {
            val: "1d",
            name: "Day",
          },
          {
            val: "1wk",
            name: "Week",
          },
          {
            val: "1mo",
            name: "Month",
          },
        ],
        name: "interval",
        title: "Interval",
      }).map(
        (
          data: {
            options: any;
            name: string;
            title: string;
          },
          i: number
        ) => (
          <Grid item xs={2} key={i}>
            <SelectInput
              name={data.name}
              title={data.title}
              options={data.options}
              handleFilter={handleChangeData}
            />
          </Grid>
        )
      )}
      <Grid item xs={"auto"}>
        <DatePicker
          label="from"
          handleChange={handleChangeData}
          data={filter.from}
        />
      </Grid>
      <Grid item xs={"auto"}>
        <DatePicker
          label="to"
          handleChange={handleChangeData}
          data={filter.to}
        />
        {error && (
          <Typography variant="body2" gutterBottom sx={{ color: "red" }}>
            {error}
          </Typography>
        )}
      </Grid>
      <Grid
        item
        xs={"auto"}
        display="flex"
        textAlign="center"
        sx={{
          alignSelf: "center",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="contained"
          onClick={handleFilterData}
          disabled={!!error}
        >
          Filter
        </Button>
      </Grid>
    </Grid>
  );
};

export default Filter;
