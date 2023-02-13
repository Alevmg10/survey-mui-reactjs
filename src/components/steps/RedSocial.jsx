import React from 'react';
import { Controller, useFormContext } from "react-hook-form";
import { FormControl, FormControlLabel, FormHelperText, Radio, RadioGroup } from "@mui/material";

const options = [
    {
        id:1,
        label: "Facebook",
        value: "optionA",
    },
    {
        id:2,
        label: "Instagram",
        value: "optionB",
    },
    {
        id:3,
        label: "TikTok",
        value: "optionC",
    },
    {
        id:4,
        label: "Twitter",
        value: "optionD",
    },
    {
        id:5,
        label: "WhatsApp",
        value: "optionE"
    }
  ]

export default function RedSocial() {

    const {control} = useFormContext();

    return (
      <Controller
        name="redSocial"
        render={({field:{value, onChange}, fieldState: { invalid, error }}) => (
          <FormControl error={invalid}>
            <RadioGroup aria-label="redSocial" value={value} onChange={onChange}>
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
