import { GET_FILTER_DATA } from "./types";

export interface IntialState {
    data:[]
}
const initialState: IntialState = {
 data:[]
};

export default function (
  state = initialState,
  action: { type: any; payload: any }
) {
  const { type, payload } = action;
  switch (type) {
    case GET_FILTER_DATA:
      console.log({ payload });
      return {
        ...state,
        data: payload,
      }
    default:
      return state;
  }
}
