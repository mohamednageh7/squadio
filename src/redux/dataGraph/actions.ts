import axios from "axios";
import { generateUrl } from "../utils";
import { GET_FILTER_DATA} from "./types";

export interface FilterData {
    period1?:Date|null|number,
    period2?:Date|null|number,
    interval?:"1d"|"1wk"|"1mo"
}

const url = "https://query1.finance.yahoo.com/v7/finance/download/SPUS?events=history&crumb=5YTX/gVGBmg"

export const filterData = (data:FilterData) => async (dispatch: any) => {
  try {
    let urlUpdat = generateUrl(data,url)

    let res: any = await axios.get('https://query1.finance.yahoo.com/v7/finance/download/SPUS?period1=1633381200&period2=1664917199&interval=1d&events=history&crumb=5YTX/gVGBmg');
    console.log({getUsers:res.data})
    return dispatch({
      type: GET_FILTER_DATA,
      payload: res.data,
    });
  } catch (error) {
    console.log({ removeAlertError: error });
  }
};

