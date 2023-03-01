import { Box } from "@mui/material";
import {TextFieldCustom}  from "../InputCustoms";
import { useStyles } from "../Styles";


export default function Iniciar() {

  const classes = useStyles();

  return ( 
      <Box className={classes.box}>
        <h6 className="mt-4 h-6 text-gray-700 font-bold leading-8 text-lg mb-8">
          Ingrese sus datos para comenzar la encuesta
        </h6>
        <TextFieldCustom label="Nombre" name="nombre"  />
        <TextFieldCustom label="Apellido" name="apellido" />
        <TextFieldCustom label="Email" name="email" />
      </Box>
  );
}
