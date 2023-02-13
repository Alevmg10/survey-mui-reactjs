import React from 'react';
import { Controller, useFormContext } from "react-hook-form";
import { FormControl, FormControlLabel, FormHelperText, Radio, RadioGroup } from "@mui/material";

const options = [
    {
        id:1,
        label: "18-25",
        value: "optionA",
    },
    {
        id:2,
        label: "26-33",
        value: "optionB",
    },
    {
        id:3,
        label: "34-40",
        value: "optionC",
    },
    {
        id:4,
        label: "40+",
        value: "optionD",
    }
  ]

export default function Edad() {

  const {control} = useFormContext();

  return (
    <Controller
      name="edad"
      render={({field:{value, onChange}, fieldState: { invalid, error }}) => (
        <FormControl error={invalid}>
          <RadioGroup aria-label="edad" value={value} onChange={onChange}>
          {options.map((singleOption) => <FormControlLabel key={singleOption.id}
                                                            label={singleOption.label} 
                                                            value={singleOption.value}
                                                            control={<Radio />}
            />)}
        </RadioGroup>
        <FormHelperText>{invalid ? error.message : ""}</FormHelperText>
        </FormControl>
        )}
        control={control}
      />  
  );
}
