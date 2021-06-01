const getStyles = (theme) => {
  const { space, palette, breakpoints } = theme;

  return {
    root: {
      display: ({ isActive }) => (isActive ? "flex" : "none"),
      position: "fixed",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      top: "0",
      zIndex: 10000,
      backgroundColor: palette.primary.almostWhite,
      padding: `${space.xs} ${space.s}`,
      paddingTop: space.xl,
      height: "100vh",
      [`@media screen and (min-width: ${breakpoints.navbar})`]: {
        display: () => "none",
      },
    },
    buttonsWrapper: {
      display: "flex",
      alignItems: "center",
      margin: `${space.xl} 0`,
      "& div:first-of-type": {
        marginRight: space.m,
      },
    },
    primaryMenu: {
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: `${space.xxs} 0`,
      margin: 0,
    },

    primaryMenuItem: {
      fontFamily: "'Montserrat', sans-serif",
      textTransform: "uppercase",
      color: palette.primary.darkGrey,
      marginBottom: space.s,
      // margin: 0,
    },
  };
};

export default getStyles;
