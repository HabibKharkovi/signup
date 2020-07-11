
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formOuterWrapper: {
        display: 'flex',
        flex: 1,
        padding: "100px 150px",
        marginLeft: '35%',
        backgroundColor: "#fafafa",
        [theme.breakpoints.down(1600)]: {
          padding: "50px 80px",
        },
        [theme.breakpoints.down(1366)]: {
          padding: "40px 60px",
        },
        [theme.breakpoints.down(767)]: {
          marginLeft: '0',
          padding: "15px",
        },
    },
    paper: {
        padding: theme.spacing(5, 10),
        color: theme.palette.text.secondary,
        width: '100%',
        backgroundColor: "#fff",
        [theme.breakpoints.down(1366)]: {
          padding: theme.spacing(3, 7),
        },
        [theme.breakpoints.down(767)]: {
          padding: theme.spacing(2, 2),
        },
    },
  }));

export default useStyles;