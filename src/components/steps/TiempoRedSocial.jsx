import React from 'react';
import { Controller, useFormContext } from "react-hook-form";
import { FormControl, FormControlLabel, FormHelperText, Radio, RadioGroup } from "@mui/material";

const options = [
    {
        id:1,
        label: "Menor o igual a una hora",
        value: "optionA",
    },
    {
        id:2,
        label: "1-3 horas",
        value: "optionB",
    },
    {
        id:3,
        label: "3+ horas",
        value: "optionC",
    },
    {
        id:4,
        label: "No la uso",
        value: "optionD",
    },
  ]

export default function TiempoRedSocial() {

    const {control} = useFormContext();

  return (
    <>
        <Controller
            name="tiempoFacebook"
            render={({field:{value, onChange}, fieldState: { invalid, error }}) => (
            <FormControl error={invalid}>
                <RadioGroup row aria-label="tiempoFacebook" value={value} onChange={onChange}>
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
        <Controller
            name="tiempoInstagram"
            render={({field:{value, onChange}, fieldState: { invalid, error }}) => (
            <FormControl error={invalid}>
                <RadioGroup row aria-label="tiempoInstagram" value={value} onChange={onChange}>
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
        <Controller
            name="tiempoTikTok"
            render={({field:{value, onChange}, fieldState: { invalid, error }}) => (
            <FormControl error={invalid}>
                <RadioGroup row aria-label="tiempoTikTok" value={value} onChange={onChange}>
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
        <Controller
            name="tiempoTwitter"
            render={({field:{value, onChange}, fieldState: { invalid, error }}) => (
            <FormControl error={invalid}>
                <RadioGroup row aria-label="tiempoTwitter" value={value} onChange={onChange}>
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
        <Controller
            name="tiempoWhatsApp"
            render={({field:{value, onChange}, fieldState: { invalid, error }}) => (
            <FormControl error={invalid}>
                <RadioGroup row aria-label="tiempoWhatsApp" value={value} onChange={onChange}>
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
    </>
  )
}
