import React, { setState } from 'react';
import Paper from '@material-ui/core/Paper';
import StepperForm from './../stepper';
import SignupSidebar from './../signupSidebar';
import useStyles from './signup.style';




export default function Signup(){
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <SignupSidebar/>

            <div className={classes.formOuterWrapper}>
               <Paper className={classes.paper}>
                    <StepperForm/>
               </Paper>
            </div>
        </div>
    )
}