const getStyles = (theme) => {
  const { space } = theme;
  return {
    contentWrapper: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      marginTop: "80px",
      //   paddingTop: "70px",
    },
  };
};

export default getStyles;
