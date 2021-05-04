const breakpoint = 700;

const isActive = false;

const getStyles = (theme) => {
  const { space } = theme;

  return {
    root: {
      width: "100%",
      top: "0",
      zIndex: 10000,
      backgroundColor: theme.palette.primary.almostBlack,
      padding: `0 ${space.xs}`,
      "@media screen and (max-width: 699px)": {
        position: isActive ? "fixed" : "absolute",
        // backgroundColor: isActive ? theme.palette.primary.almostBlack : "unset",
        height: isActive ? "100vh" : "auto",
      },
      "@media screen and (min-width: 700px)": {
        position: "absolute",
      },
    },
    nav: {
      width: "100%",
      margin: "0 auto",
      display: "flex",
      backgroundColor: "red",
      "@media screen and (max-width: 699px)": {
        flexDirection: "column",
        height: "100%",
      },
      "@media screen and (min-width: 700px)": {
        maxWidth: "1900px",
        justifyContent: "space-between",
        height: "auto",
        flexDirection: "row",
      },
    },
    a: {
      display: "block",
      textDecoration: "none",
      color: "secondaryContrast",
      fontWeight: "500",
      cursor: "pointer",
      transition: "color 500ms ease",
      ":hover": {
        color: "text",
      },
      "@media screen and (max-width: 699px)": {
        marginBottom: "20px",
      },
      "@media screen and (min-width: 700px)": {
        marginLeft: "25px",
      },
    },
    listWrapper: {
      listStyle: "none",
      "@media screen and (max-width: 699px)": {
        display: isActive ? "flex" : "none",
        flexDirection: "column",
        fontSize: "25px",
        marginTop: "100px",
      },
      "@media screen and (min-width: 700px)": {
        fontSize: 3,
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "row",
      },
    },
    hamburger: {
      display: "flex",
      width: "40px",
      height: "25px;",
      justifyContent: "space-between",
      flexDirection: "column",
      position: "absolute",
      top: "20px",
      right: "20px",
      zIndex: 30000,
      cursor: "pointer",

      "@media screen and (min-width: 700px)": {
        display: "none",
      },
    },
  };
};

export default getStyles;
