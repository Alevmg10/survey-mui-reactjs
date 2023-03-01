import { useState } from "react";
import Stepper from '@mui/material/Stepper';
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from '@mui/material/Button';
import { Box, Paper, Link } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import Iniciar from "./components/steps/Iniciar";
import Genero from "./components/steps/Genero";
import Edad from "./components/steps/Edad";
import RedSocial from "./components/steps/RedSocial";
import TiempoRedSocial from "./components/steps/TiempoRedSocial";
import  {CustomTheme, useStyles } from "./components/Styles";
import { ThemeProvider } from "@mui/material/styles";



function App() {
  
  const classes = useStyles();
  const theme = CustomTheme();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    "Datos Personales",
    "Genero",
    "Edad",
    "Red Social",
    "Tiempo",
  ];

  const getStepContent = (step) => {
    switch(step) {
      case 0: return <Iniciar/>;
      case 1: return <Genero/>;
      case 2: return <Edad/>;
      case 3: return <RedSocial/>;
      case 4: return <TiempoRedSocial/>;
      default:
    }
  }

  const defaultValues = {
    nombre: "",
    apellido: "",
    email: "",
    genero: "",
    edad: "",
    redSocial: "",
    tiempoFacebook: "",
    tiempoInstagram: "",
    tiempoTikTok: "",
    tiempoTwitter: "",
    tiempoWhatsApp: "",
  };

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    // alert(JSON.stringify(data));
    handleNext();
  };

  const validationSchema = [
    yup.object({
      nombre: yup.string().required("Este campo es requerido"),
      apellido: yup.string().required("Este campo es requerido"),
      email: yup.string().email("Ingrese un email valido").required("Este campo es requerido")
    }),
    yup.object({
      genero: yup.string().required("Debe escoger alguna opcion"),
    }),
    yup.object({
      edad: yup.string().required("Seleccione un rango de edad"),
    }),
    yup.object({
      redSocial: yup.string().required("Seleccione una de las opciones")
    }),
    yup.object({
      tiempoFacebook: yup.string().required("Debe escoger alguna opcion"),
      tiempoInstagram: yup.string().required("Debe escoger alguna opcion"),
      tiempoTikTok: yup.string().required("Debe escoger alguna opcion"),
      tiempoTwitter: yup.string().required("Debe escoger alguna opcion"),
      tiempoWhatsApp: yup.string().required("Debe escoger alguna opcion"),
    })
  ]

  const currentValidationSchema = validationSchema[activeStep];
  const methods = useForm({
    shouldUnregister: false,
    defaultValues,
    resolver: yupResolver(currentValidationSchema),
    mode: "onChange"
  });
  const { handleSubmit, reset, trigger } = methods;

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid) setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    reset();
  };

  return (
    <div className={classes.layout}>
      <Paper className={classes.paper} elevation={1}>
      <ThemeProvider theme={theme}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step color="primary" key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div style={{ minHeight: "50%" }}>
          {activeStep === steps.length ? (
              <div className="container md:mt-10">
                <div className="flex flex-col items-center space-y-4">
                  <div className="wrapper">
                    <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                      <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                      <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                    </svg>
                  </div>
                  <div className="mt-3 text-xl font-semibold uppercase text-green-500">
                    Encuesta Finalizada
                  </div>
                  <div className="text-lg font-semibold text-gray-500">
                    Gracias por participar
                  </div>
                  <Button variant="contained" onClick={handleReset}>
                    Reiniciar
                  </Button> 
                </div>
              </div>
          ) : (
            <FormProvider {...methods}>
              <form>
                <div className={classes.instructions}>
                  {getStepContent(activeStep)}
                </div>
                <Box
                  display="flex"
                  justifyContent="center"
                  style={{marginTop: "5vh"}}
                >
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    color="primary"
                    variant="outlined"
                    style={{marginRight: theme.spacing(1)}}
                  >
                    Atras
                  </Button>
                  {activeStep === steps.length - 1 ? (
                    <Link href="/">
                      {<Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit(onSubmit)}
                      >
                        Enviar
                      </Button>}
                    </Link>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      color="primary"
                    >
                      Siguiente
                    </Button>
                  )}
                </Box>
              </form>
            </FormProvider>
          )}
        </div>
        </ThemeProvider>
      </Paper>
    </div>
  );
}

export default App;
