import React, { useEffect, useState, createContext, useMemo } from "react";
import Grid from "@mui/material/Grid";
import Filter from "./filters/Filter";
import UsersData from "./graphData/FilterData";
import { useSelector, useDispatch } from "react-redux";
import { filterData } from "../../redux/dataGraph/actions";
import { filterSelector } from "../../redux/dataGraph/selector";
import FilterData from "./graphData/FilterData";
import moment from "moment";

type Props = {};
export const DataContext = createContext<any>([]);
const DataViewWrapper = (props: Props) => {
  const [filter, setFilter] = useState<{
    from: Date | null;
    to: Date | null;
    interval: "1d"|"1wk"|"1mo";
  }>({
    from:new Date(),
    to: new Date(),
    interval: "1d",
  });
  const [error, setError] = useState<string | null>(null);
  const { from, to, interval } = filter;
  let dispatch = useDispatch();
  useEffect(() => {
    if (from && to) {
      let timeCheck = moment(from).isAfter(to);
      if (timeCheck) {
        setError("From date can't be after To date");
      }else {
        setError(null);
      }
    }
  }, [from, to]);

  const { data } = useSelector(filterSelector);
  const handleChangeData = (data: object) => {
    if (["from", "to"].includes(Object.keys(data)[0])) {
      data = {
        [Object.keys(data)[0]]: Object.values(data)[0].getTime(),
      };
    }
    return setFilter({
      ...filter,
      ...data,
    });
  };

  const handleFilterData = () => {
    console.log({filter})
    return dispatch(
      filterData({
        period1: 1664917199,
        period2: 1664917199,
        interval,
      })
    );
  };
  let value = useMemo(
    () => [handleChangeData, handleFilterData, filter, error],
    [handleChangeData, handleFilterData, filter, error]
  );
  return (
    <DataContext.Provider value={value}>
      <Grid container spacing={4} mt="2em">
        <Grid item xs={12}>
          <Filter />
        </Grid>
        <Grid item xs={11}>
            <FilterData/>
        </Grid>
      </Grid>
    </DataContext.Provider>
  );
};

export default DataViewWrapper;
