import React from 'react'
import clsx from 'clsx'
import {
  Grid,
  Card,
  Typography,
  makeStyles
} from '@material-ui/core'
import ProgressStep from '../components/progressStep'
import LinkIcon from '@material-ui/icons/Link';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import {
  SelectContainer,
  LogoContainer,
  ContentContainer,
  StylesImg,
  StyledButton,
  StyledTypography,
  StyledH3,
  StyledUl,
  StyledLi,
  MainContainer,
  DefaultButton
} from "../components/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: "20px",
    padding: theme.spacing(5),
    width: "550px",
    fontSize: "smaller",
    position: "relative",
    [theme.breakpoints.down('sm')]: {
      width: "400px"
    },
    [theme.breakpoints.down('xs')]: {
      width: "300px"
    }
  },
  bottomCard: {
    display: 'flex',
    justifyContent: "center",
    flexDirection: 'row',
    width: "550px",
    margin: "20px",
    position: "relative",
    [theme.breakpoints.down('sm')]: {
      width: "400px"
    },
    [theme.breakpoints.down('xs')]: {
      width: "300px"
    }
  },
  circleCircle: {
    color: "#06E22F",
    margin: "10px 10px 10px 0"
  },
  lintItem: {
    margin: "auto 20px",
    
  }, 
  logoContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: "column",
      alignItems: "center"
    }
  },
  logoContainCard: {
    height: "30px",
    display: "flex"
  },
  spanLeap: {
    margin: "auto 20px",
    fontWeight: "bold",
  }, 
  gridContainer: {
    maxWidth: "400px",
    display: "flex",
    justifyContent: "space-around"
  }
}))

const PlanProgress = ({ className, ...rest }) => {
  const classes = useStyles()

  return (
    <MainContainer>
      <Card
        className={clsx(classes.root, className)}
        {...rest}
      >
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {"Select Utility"}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="body1"
        >
          {"Select your utility provider..."}
        </Typography>

        <SelectContainer>
          <CheckCircleRoundedIcon className={classes.circleCircle}/>
          <Typography>SDG&E</Typography>
        </SelectContainer>

        <LogoContainer className={classes.logoContainer}>
          <Card className={classes.logoContainCard}>
            <StylesImg
              alt="Logo"
              src="leap.svg" />
          </Card>
          <LinkIcon className={classes.lintItem}/>
          <Card className={classes.logoContainCard}>
            <StylesImg
              alt="Logo"
              src="sdge.svg" />
            <span className={classes.spanLeap}>leap</span>
          </Card>
        </LogoContainer>

        <ContentContainer>
          <StyledH3>Support Your Local Grid</StyledH3>
          <StyledUl>
            <StyledLi>
              Help reduce CO2 and grid blackouts by delaying charging during high electricity demand.
            </StyledLi>
            <StyledLi>
              Optiwatt will notify you prior to these rare events and automatically resume charging immediately afterwards.
            </StyledLi>
            <StyledLi>
              You can opt-out at anytime
            </StyledLi>
          </StyledUl>
          <StyledButton mr={2} variant="contained" color="primary">
            Authorize
          </StyledButton>
          <DefaultButton mr={2}>Skip for Later</DefaultButton>
          <StyledTypography>
            By clicking Authorize, Leap, our 3rd party provider, will connect to your ultility company meter and enable Optiwatt to support the grid.
          </StyledTypography>
        </ContentContainer>

      </Card>

      <Card
        className={clsx(classes.bottomCard, className)}
        {...rest}
      >
        <Grid container className={classes.gridContainer}>
          <Grid item xs={6} md={3}>
            <ProgressStep 
            stepStatus={"SUCCESS"}
            step={1}
            stepContent={"Connect Tesla"} />
          </Grid>
          <Grid item xs={6} md={3}>
            <ProgressStep 
            stepStatus={"SUCCESS"}
            step={2}
            stepContent={"Add Home"} />
          </Grid>
          <Grid item xs={6} md={3}>
            <ProgressStep 
            stepStatus={"SELECTED"}
            step={3}
            stepContent={"Select Utility"} />
          </Grid>
          <Grid item xs={6} md={3}>
            <ProgressStep 
            stepStatus={"UNSELECTED"}
            step={4}
            stepContent={"Select Elestric Plan"} />
          </Grid>
        </Grid>
      </Card>
    </MainContainer>
  )
}

export default PlanProgress
