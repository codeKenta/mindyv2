const getStyles = (theme) => {
  const { space, palette, breakpoints } = theme;

  return {
    root: {
      width: "100%",
      top: "0",
      position: "fixed",
      zIndex: 20000,
      padding: `${space.xs} ${space.s}`,
      backgroundColor: palette.primary.almostWhite,
      borderBottom: ({ isActive }) => (isActive ? "none" : "1px solid grey"),
      [`@media screen and (min-width: ${breakpoints.navbar})`]: {
        borderBottom: "1px solid grey",
      },
    },
    logo: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: "bold",
      fontSize: 25,
      cursor: "pointer",
    },
    nav: {
      width: "100%",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      maxWidth: "1900px",
      justifyContent: "space-between",
      height: "auto",
      flexDirection: "row",
    },
    navGroupsWrapper: {
      display: "flex",
      flexDirection: "row",
    },

    hamburgerWrapper: {
      marginLeft: space.m,
      [`@media screen and (min-width: ${breakpoints.navbar})`]: {
        display: "none",
      },
    },
  };
};

export default getStyles;
