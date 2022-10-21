import axios from 'axios';
import { generateUrl } from "../utils";
import { GET_FILTER_DATA} from "./types";
import Papa from 'papaparse'

export interface FilterData {
    period1?:Date|null|number,
    period2?:Date|null|number,
    interval?:"1d"|"1wk"|"1mo"
}

const url = "https://query1.finance.yahoo.com/v7/finance/download/SPUS?events=history&crumb=5YTX/gVGBmg&"


export const filterData = (data:FilterData) => async (dispatch: any) => {
  try {
      let urlUpdate = generateUrl(data,url)
    let res = await axios.get(`${process.env.REACT_APP_DB_BASEURL}/finance?url=${urlUpdate}`)
    console.log({res})
    Papa.parse(res.data.data, {
        complete: function(result:any) {
            console.log({result:result.data})
            result.data.shift()
            return dispatch({
                type: GET_FILTER_DATA,
                payload: result.data,
              });
        }
    });

  } catch (error) {
    console.log({ removeAlertError: error });
  }
};

