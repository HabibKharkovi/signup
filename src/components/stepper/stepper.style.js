
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      position: 'relative',
      height: '100%',
      paddingBottom: 110
    },
    fullWidthButton: {
        width: '100%',
        fontSize: 20,
        backgroundColor: '#795bb5'
    },
    bottomInnerStepper: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    link: {
        color: '#1cb5c5',
        fontSize: 17,
        textDecoration: 'none',
        [theme.breakpoints.down(767)]: {
            fontSize: 11,
        },
    },
    label: {
        color: "#795bb5",
        fontSize: 17,
    },
    button: {
        marginRight: 10,
        marginTop: 20
    },
    stepperWrapper: {
        padding: 0,
        
    },
    bottomStepper: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    formGroup: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0 -10px',
        [theme.breakpoints.down(767)]: {
            flexDirection: 'column',
            margin: '0',
        },
    },
    input: {
        width: '100%'
    },
    select: {
        width: '100%'
    },
    fullWidthInput: {
        width: '100%',
        margin: '0 10px 20px'
    },
    halfWidth: {
        maxWidth: 'calc(50% - 20px)',
        flex: 'calc(50% - 20px)',
        margin: '0 10px 20px',
        [theme.breakpoints.down(767)]: {
            maxWidth: 'calc(100%)',
            flex: 'calc(100%)',
            margin: '0 0 15px',
        },
    },
    title: {
        color: '#1cb5c5',
        fontSize: 38,
        textAlign: 'center',
        margin: '0 0 25px',
        [theme.breakpoints.down(767)]: {
            fontSize: 24,
        },
    },
    signupIcon: {
        width: 50,
        height: 50,
        margin: '0 auto 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#785caf',
        borderRadius: '50%'
    },
    signupIconImg: {
        width: '61%'
    }
  }));

export default useStyles;