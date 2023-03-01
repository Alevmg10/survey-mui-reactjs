import React from 'react';
import { Controller, useFormContext } from "react-hook-form";
import { Box, FormControl, FormControlLabel, FormHelperText, Radio, RadioGroup } from "@mui/material";
import { useStyles } from '../Styles';

const options = [
    {
        id:1,
        label: "18-25 años",
        value: "optionA",
    },
    {
        id:2,
        label: "26-33 años",
        value: "optionB",
    },
    {
        id:3,
        label: "34-40 años",
        value: "optionC",
    },
    {
        id:4,
        label: "40+ años",
        value: "optionD",
    }
  ]

export default function Edad() {

  const {control} = useFormContext();
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <h6 className="mt-4 text-lg mb-3 h-6 text-gray-700 font-bold leading-8">
        Seleccione su rango de edad
      </h6>
      <Controller
      name="edad"
      render={({field:{value, onChange}, fieldState: { invalid, error }}) => (
        <FormControl className={classes.form_control} error={invalid}>
          <RadioGroup aria-label="edad" value={value} onChange={onChange}>
          {options.map((singleOption) => <FormControlLabel key={singleOption.id}
                                                            label={singleOption.label} 
                                                            value={singleOption.value}
                                                            control={<Radio />}
            />)}
          </RadioGroup>
          <FormHelperText>{invalid ? error.message : " "}</FormHelperText>
        </FormControl>
        )}
        control={control}
      />
    </Box>
  );
}
