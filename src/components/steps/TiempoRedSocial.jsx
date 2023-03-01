import React from 'react';
import { Controller, useFormContext } from "react-hook-form";
import { Box, FormControl, FormControlLabel, FormHelperText, Radio, RadioGroup } from "@mui/material";
import { useStyles } from '../Styles';

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
    const classes = useStyles();

  return (
    <Box className={classes.box}>
      <h6 className="mt-4 text-lg mb-3 h-6 text-gray-700 font-bold leading-8">
        ¿Cuanto cree usted que dura al dia usando una red social?
      </h6>
      {/* FACEBOOK */}
      <div className="flex flex-col justify-start space-y-1">
        <h6 className="mt-4 h-6 text-gray-700 font-bold">
          Facebook
        </h6>
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
            <FormHelperText variant="string">{invalid ? error.message : " "}</FormHelperText>
            </FormControl>
          )}
          control={control}
        />
      {/* INSTAGRAM */}
        <h6 className="mt-4 h-6 text-gray-700 font-bold">
          Instagram
        </h6>
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
            <FormHelperText variant="string">{invalid ? error.message : " "}</FormHelperText>
            </FormControl>
          )}
          control={control}
        />
        {/* TikTok */}
        <h6 className="mt-4 h-6 text-gray-700 font-bold">
          TikTok
        </h6>
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
            <FormHelperText variant="string">{invalid ? error.message : " "}</FormHelperText>
            </FormControl>
            )}
          control={control}
        />
        {/* Twitter */}
        <h6 className="mt-4 h-6 text-gray-700 font-bold">
          Twitter
        </h6>
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
            <FormHelperText variant="string">{invalid ? error.message : " "}</FormHelperText>
            </FormControl>
            )}
          control={control}
        />
        {/* Whatsapp */}
        <h6 className="mt-4 h-6 text-gray-700 font-bold leading-8">
          WhatsApp
        </h6>
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
            <FormHelperText variant="string">{invalid ? error.message : " "}</FormHelperText>
            </FormControl>
            )}
          control={control}
        />
      </div>
    </Box>
  )
}
