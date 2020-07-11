import React, { setState } from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './signupSidebar.style';
import brandLogo from './../../images/logo.png';



export default function SignupSidebar(){
    const classes = useStyles();
    return (
        <div className={classes.sidebar}>
            <div className={classes.sidebarInnerWrapper}>
                <div className={classes.imgWrapper}>
                    <img className={classes.brandLogo} src={brandLogo} alt="brand logo"/>
                </div>
                <div className={classes.buttonWrapper}>
                    <Button className={classes.button} variant="contained" color="primary">
                        SIGN IN
                    </Button>
                </div>
            </div>
        </div>
    )
}