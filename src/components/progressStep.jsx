import React from 'react';
import {
  Box,
  Typography,
  makeStyles
} from '@material-ui/core';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CancelIcon from '@material-ui/icons/Cancel';
import { colors } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(5)
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: "80px",
    transform: "translate(-50%, 0)",
    left: "50%",
    position: "relative",
  },
  success:{
    padding: theme.spacing(1),
    margin: "auto",
    marginTop: "10px",
    width: theme.spacing(5),
    height: theme.spacing(5),
    color: "#06E22F",
    
  },
  failed:{
    padding: theme.spacing(1),
    margin: "auto",
    marginTop: "10px",
    width: theme.spacing(5),
    height: theme.spacing(5),
    color: theme.palette.primary.error,
  },

  circleNumberIcon: {
    position: "relative",
    color: colors.common.white,
    margin: "20px 11px 11px 11px",
    fontSize: "smaller",
    borderRadius: "50%",
    backgroundColor: "#BA3BFF",
    width: "20px",
    height: "20px",
  },
  
  unselectedCircleNumberIcon: {
    position: "relative",
    color: colors.common.white,
    margin: "20px 11px 11px 11px",
    fontSize: "smaller",
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.disable,
    width: "20px",
    height: "20px",
  },
  spanStep : {
    top: "50%",
    left: "50%",
    position: "absolute",
    transform: "translate(-50%, -50%)",
  },
  content: {
    textAlign: "center"
  },
  textPrimary: {
    color: colors.common.black,
    fontSize: "smaller"
  },
  spanContent: {
    fontSize: "smaller",
  },
  typoContent: {
    textAlign: "center",
    marginBottom: "20px"
  }
}));

const ProgressStep = ({ stepStatus, step, stepContent }) => {
  const classes = useStyles();
  switch(stepStatus) {
    case "SUCCESS": 
      return (
        <Box className={classes.statsItem} >
          <CheckCircleRoundedIcon
            className={classes.success}
          />
          <Typography
            color="textSecondary"
            display="inline"
            variant="body2"
            className={classes.typoContent}
          >
            <span className={classes.spanContent}>{stepContent}</span>
          </Typography>
        </Box>
        )
    case "FAILED": 
      return (
        <Box className={classes.statsItem} >
          <CancelIcon
            className={classes.failed}
          />
          <Typography
            color="textSecondary"
            display="inline"
            variant="body2"
            className={classes.typoContent}
          >
            <span className={classes.spanContent}>{stepContent}</span>
          </Typography>
        </Box>
      )
    case "SELECTED":
      return (
        <Box className={classes.statsItem}>
        <Typography
          className={classes.circleNumberIcon}
        >
          <span className={classes.spanStep}>{step}</span>
        </Typography>
        <Typography
          color="textSecondary"
          display="inline"
          variant="body2"
        >
          <span className={classes.textPrimary}>{stepContent}</span>
        </Typography>
      </Box>
      )
    case "UNSELECTED":
      return (
        <Box className={classes.statsItem}>
          <Typography
            className={classes.unselectedCircleNumberIcon}
          >
            <span className={classes.spanStep}>{step}</span>
          </Typography>
          <Typography
            color="textSecondary"
            display="inline"
            variant="body2"
            className={classes.typoContent}
          >
            <span className={classes.spanContent}>{stepContent}</span>
          </Typography>
        </Box>
      )
    default:
      return (
        <Box className={classes.statsItem} >
          <CancelIcon
            className={classes.success}
          />
          <Typography
          className={classes.content}
            color="textSecondary"
            display="inline"
            variant="body2"
            className={classes.typoContent}
          >
            <span className={classes.spanContent}>{stepContent}</span>
          </Typography>
        </Box>
      )
  }
};

export default ProgressStep;
