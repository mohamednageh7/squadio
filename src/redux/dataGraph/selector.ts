import { createSelector } from "reselect";
import { IntialState } from "./reducer";


interface RootState {
    filter: IntialState;
  }

export const filterSelector = createSelector(
  (state: RootState) => state.filter,
  (filter) => {
    return {
      data: filter.data,
    };
  }
);
