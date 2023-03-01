import { Controller, useFormContext } from "react-hook-form";
import { Box, FormControl, FormControlLabel, FormHelperText, Radio, RadioGroup } from "@mui/material";
import { useStyles } from "../Styles";

const options = [
  {
    id:1,
    label: "Masculino",
    value: "optionA",
  },
  {
    id:2,
    label: "Femenino",
    value: "optionB",
  },
  {
    id:3,
    label: "No Binario",
    value: "optionC",
  }
]

export default function Genero() {
  const {control} = useFormContext();
  const classes = useStyles();

  return (
    
    <Box className={classes.box}>
      <h6 className="mt-4 text-lg mb-3 h-6 text-gray-700 font-bold leading-8">
        Elija su sexo
      </h6>
      <Controller
        name="genero"
        render={({field:{value, onChange}, fieldState: { invalid, error }}) => (
        <FormControl className={classes.form_control} error={invalid}>
          <RadioGroup aria-label="genero" value={value} onChange={onChange}>
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