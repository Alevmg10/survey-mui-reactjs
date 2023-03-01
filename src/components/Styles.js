import { makeStyles } from "@material-ui/core";
import { createTheme } from '@mui/material/styles';

export const useStyles = makeStyles((theme) => ({
    layout: {
      width: "auto",
      height: "100vh",
      // marginLeft: theme.spacing(0.5),
      // marginRight: theme.spacing(0.5),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto"
      }
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      minHeight: "25vh"
    },
    paper: {
      // marginTop: theme.spacing(2),
      // marginBottom: theme.spacing(2),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3)
      }
    },
    box: {
      width: "100%",
      height: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(2),
    },
    form_control: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }
  }));


export const CustomTheme = () => createTheme({
  palette: {
    primary: {
      main: '#4caf50',
      contrastText: '#fff',
    },
  },
});
