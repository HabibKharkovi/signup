
import { makeStyles } from '@material-ui/core/styles';
import Background from './../../images/bg.jpg';

const useStyles = makeStyles(theme => ({
    sidebar: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: 'url(' + Background + ')',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      flex: '35%',
      maxWidth: '35%',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
      padding: '0 80px',
      position: 'fixed',
      width: '35%',
      top: 0,
      bottom: 0,
      left: 0,
      height: '100vh',
      [theme.breakpoints.down(767)]: {
        display: 'none'
      },
    },
    button: {
        padding: "2px 40px",
        fontSize: 20,
        backgroundColor: "#795bb5",
    },
    buttonWrapper: {
        display: 'flex',
        marginTop: 72,
        justifyContent: 'center',
    },
    sidebarInnerWrapper: {
        paddingBottom: '42%'
    },
    imgWrapper: {
        maxWidth: 420,
        margin: '0 auto'
    },
    brandLogo: {
        width: '100%'
    }
  }));

export default useStyles;