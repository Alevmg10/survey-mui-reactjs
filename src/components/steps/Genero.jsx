import { Controller, useFormContext } from "react-hook-form";
import { FormControl, FormControlLabel, FormHelperText, Radio, RadioGroup } from "@mui/material";

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

  return (
    <Controller
      name="genero"
      render={({field:{value, onChange}, fieldState: { invalid, error }}) => (
        <FormControl error={invalid}>
          <RadioGroup aria-label="genero" value={value} onChange={onChange}>
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
