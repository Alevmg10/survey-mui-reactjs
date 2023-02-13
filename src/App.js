import { useState } from "react";
import Stepper from '@mui/material/Stepper';
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from '@mui/material/Button';
import { Box, Paper } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import Iniciar from "./components/steps/Iniciar";
import Genero from "./components/steps/Genero";
import Edad from "./components/steps/Edad";
import Final from "./components/steps/Final";
import RedSocial from "./components/steps/RedSocial";
import TiempoRedSocial from "./components/steps/TiempoRedSocial";
import { makeStyles } from "@mui/styles";
import  {createTheme, ThemeProvider} from "@mui/material/styles"


const useStyles = makeStyles(theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    minHeight: "25vh"
  },
  paper: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3)
    }
  }
}));



function App() {
  const theme = createTheme();
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    "Datos Personales",
    "Genero",
    "Edad",
    "Red Social",
    "Tiempo",
    "Finalizar"
  ];

  const getStepContent = (step) => {
    switch(step) {
      case 0: return <Iniciar/>;
      case 1: return <Genero/>;
      case 2: return <Edad/>;
      case 3: return <RedSocial/>;
      case 4: return <TiempoRedSocial/>;
      case 5: return <Final/>;
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
    alert(JSON.stringify(data));
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
    <ThemeProvider theme={theme} className={classes.layout}>
      <Paper className={classes.paper} elevation={1}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div style={{ minHeight: "50%" }}>
          {activeStep === steps.length ? (
            <>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </>
          ) : (
            <FormProvider {...methods}>
              <form>
                <div className={classes.instructions}>
                  {getStepContent(activeStep)}
                </div>
                <Box
                  display="flex"
                  justifyContent="center"
                  style={{ paddingTop: "5vh" }}
                >
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  {activeStep === steps.length - 1 ? (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSubmit(onSubmit)}
                      className={classes.button}
                    >
                      Submit
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      Next
                    </Button>
                  )}
                </Box>
              </form>
            </FormProvider>
          )}
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
