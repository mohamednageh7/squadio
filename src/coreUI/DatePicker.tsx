import React, { useContext, useEffect, useState } from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

type Props = {
    handleChange: (data:object) => void;
    data: Date | null;
    label?:string;
}

const DatePicker = ({ handleChange, data,label="" }: Props) => {
    const [value, setValue] = React.useState<Date | null>(new Date());
    useEffect(() => {
        setValue(data);
      }, [data]);
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label={label}
          value={value}
          onChange={(newValue:React.SetStateAction<Date | null>) => {
            setValue(newValue);
            handleChange({[label]:newValue})
          }}
          renderInput={(params: JSX.IntrinsicAttributes & TextFieldProps) => <TextField {...params} />}
        />
      </LocalizationProvider>
    );
}

export default DatePicker