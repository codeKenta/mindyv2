import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => {
  const { palette, radius, fonts, space } = theme;

  return {
    root: {
      display: "grid",
      gridTemplateColumns: "0.6fr 0.4fr",
    },
    firstWrapper: {
      padding: "50px",
      background: "blue",
    },
    secondWrapper: {
      padding: "50px",
      background: "grey",
    },
  };
});

const DevidedSection = ({ firstChildren, secondChildren }) => {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.firstWrapper}>{firstChildren}</div>
      <div className={classes.secondWrapper}>{secondChildren}</div>
    </section>
  );
};

DevidedSection.propTypes = {
  firstChildren: PropTypes.node.isRequired,
  secondChildren: PropTypes.node.isRequired,
};

export default DevidedSection;
