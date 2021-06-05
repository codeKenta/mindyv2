import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DevidedSection from "@components/DevidedSection";

const useStyles = makeStyles((theme) => {
  const { palette, radius, fonts, space } = theme;

  return {
    root: {},

    firstWrapper: {},
    secondWrapper: {},
  };
});

const EnterWithAccount = () => {
  const classes = useStyles();

  const firstChildern = <h1>Start your journal</h1>;

  const secondChildren = (
    <>
      <h1>Login to Zenote</h1>
      <button>Login with google</button>
      <button>Login in with reddit</button>
    </>
  );

  return (
    <DevidedSection
      firstChildren={firstChildern}
      secondChildren={secondChildren}
    />
  );
};

export default EnterWithAccount;
