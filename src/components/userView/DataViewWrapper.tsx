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
    from: Date | null|number;
    to: Date | null|number;
    interval: "1d"|"1wk"|"1mo";
  }>({
    from:1633381200,
    to: 1664917199,
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
    return dispatch(
      filterData({
        period1: from , // This time range is returning data for testing 1633381200
        period2: to , //This time range is returning data testing 1664917199
        interval,
      })
    );
  };

  useEffect(() => {
     dispatch(
        filterData({
          period1: from , // This time range is returning data for testing 1633381200
          period2: to , //This time range is returning data testing 1664917199
          interval,
        })
     )
  },[])
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
