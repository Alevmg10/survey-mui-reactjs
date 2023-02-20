import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { alpha, styled } from '@mui/material/styles';
import { CustomTheme } from "./Styles";


const theme = CustomTheme();

export const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#4caf50',
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: "#4ade80",
    },
    '&.Mui-focused': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: "#4ade80"   
    },
  },
});

export const TextFieldCustom = ({...rest}) => {

  const {control} = useFormContext();

    return (
      <Controller
      {...rest}
      render={({ field, fieldState: { invalid, error } }) => (
        <CssTextField
          
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