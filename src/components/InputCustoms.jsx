import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export const TextFieldCustom = ({...rest}) => {

  const {control} = useFormContext();

    return (
      <Controller
      {...rest}
      render={({ field, fieldState: { invalid, error } }) => (
        <TextField
          label={rest.label}
          helperText={invalid ? error.message : ""}
          {...field}
          error={invalid}
        />
      )}
      control={control}
      defaultValue={rest.defaultValue}
    />
    );
  };