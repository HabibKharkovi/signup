import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SignupIcon from './../../images/signupIcon.png';
import useStyles from './stepper.style';

function getSteps() {
  return ['Enter your personal information', 'Enter Your Health Card (optional)', 'Choose Password'];
}


export default function StepperForm() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
            <div>
                <div className={classes.formGroup}>
                   <div className={classes.halfWidth}>
                      <TextField 
                        className={classes.input}
                        label="First Name *"
                      />
                   </div>
                   <div className={classes.halfWidth}>
                      <TextField 
                        className={classes.input}
                        label="Last Name *"
                      />
                   </div>
                </div>
                <div className={classes.formGroup}>
                   <div className={classes.halfWidth}>
                      <TextField 
                        className={classes.input}
                        label="Data of Birth *"
                      />
                   </div>
                   <div className={classes.halfWidth}>
                     <FormControl variant="outlined" className={classes.select}>
                        <InputLabel>Sex *</InputLabel>
                        <Select
                          label="Sex *"
                        >
                          <MenuItem value={10}>Male</MenuItem>
                          <MenuItem value={20}>Female</MenuItem>
                          <MenuItem value={30}>Other</MenuItem>
                        </Select>
                      </FormControl>
                   </div>
                </div>
                <div className={classes.formGroup}>
                   <div className={classes.halfWidth}>
                      <TextField 
                        className={classes.input}
                        label="Email Address *"
                      />
                   </div>
                   <div className={classes.halfWidth}>
                      <TextField 
                        className={classes.input}
                        label="Phone Number *"
                      />
                   </div>
                </div>
                <div className={classes.formGroup}>
                    <TextField 
                        className={classes.fullWidthInput}
                        label="Street Address *"
                    />
                </div>
                <div className={classes.formGroup}>
                   <div className={classes.halfWidth}>
                      <FormControl variant="outlined" className={classes.select}>
                        <InputLabel>Country *</InputLabel>
                        <Select
                          label="Country *"
                        >
                          <MenuItem value={10}>Country 1</MenuItem>
                          <MenuItem value={20}>Country 2</MenuItem>
                          <MenuItem value={30}>Country 3</MenuItem>
                        </Select>
                      </FormControl>
                   </div>
                   <div className={classes.halfWidth}>
                      <FormControl variant="outlined" className={classes.select}>
                          <InputLabel>State/Provice *</InputLabel>
                          <Select
                            label="State/Provice *"
                          >
                            <MenuItem value={10}>State/Provice 1</MenuItem>
                            <MenuItem value={20}>State/Provice 2</MenuItem>
                            <MenuItem value={30}>State/Provice 3</MenuItem>
                          </Select>
                        </FormControl>
                   </div>
                </div>
                <div className={classes.formGroup}>
                   <div className={classes.halfWidth}>
                      <TextField 
                        className={classes.input}
                        label="City *"
                      />
                   </div>
                   <div className={classes.halfWidth}>
                      <TextField 
                        className={classes.input}
                        label="Zip/Postal Code *"
                      />
                   </div>
                </div>
            </div>
        )
      case 1:
        return <div className={classes.formGroup}>
                    <TextField 
                        className={classes.fullWidthInput}
                        label="Card Number"
                    />
                </div>
      case 2:
        return <div>
                <div className={classes.formGroup}>
                    <TextField 
                        className={classes.fullWidthInput}
                        label="Password"
                    />
                </div>
                <div className={classes.formGroup}>
                    <TextField 
                        className={classes.fullWidthInput}
                        label="Conform Password"
                    />
                </div>
             </div>;
      default:
        return 'Unknown step';
    }
  }

  return (
    <form className={classes.root}>
      <div className={classes.signupIcon}>
        <img  className={classes.signupIconImg} src={SignupIcon}/>
      </div>
      <h2 className={classes.title}>CREATE AN ACCOUNT</h2>
      <Stepper activeStep={activeStep} className={classes.stepperWrapper} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel className={classes.label}>{label}</StepLabel>
            <StepContent>
              {getStepContent(index)}
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  { activeStep !== steps.length - 1 && <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    Next
                  </Button>}
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      <div className={classes.bottomStepper}>
            <Button type="submit" className={classes.fullWidthButton} variant="contained" color="primary">
                SIGN UP
            </Button>
            <div className={classes.bottomInnerStepper}>
                <Link className={classes.link} to="/">Sign up as a Provider</Link>
                <Link className={classes.link} to="/">Already have an account? Sign In</Link>
            </div>
      </div>
    </form>
  );
}