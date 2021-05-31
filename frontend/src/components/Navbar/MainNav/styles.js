const breakpoint = 700;

// const isActive = false;

const getStyles = (theme) => {
  const { space, palette } = theme;

  return {
    root: {
      width: "100%",
      top: "0",
      zIndex: 10000,
      backgroundColor: palette.primary.almostWhite,
      borderBottom: "1px solid grey",
      padding: `${space.xs} ${space.s}`,
      "@media screen and (max-width: 699px)": {
        position: ({ isActive }) => (isActive ? "fixed" : "absolute"),
        height: ({ isActive }) => (isActive ? "100vh" : "auto"),
      },
      "@media screen and (min-width: 700px)": {
        position: "absolute",
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
      "@media screen and (max-width: 699px)": {
        flexDirection: "column",
        height: "100%",
      },
      "@media screen and (min-width: 700px)": {
        alignItems: "center",
        maxWidth: "1900px",
        justifyContent: "space-between",
        height: "auto",
        flexDirection: "row",
      },
    },

    navGroupsWrapper: {
      display: "flex",
      flexDirection: "row",
    },

    primaryMenu: {
      listStyle: "none",
      display: "flex",
      padding: `${space.xxs} 0`,
      margin: 0,
      // fontSize: "1.2rem",
      borderRight: `1px solid ${palette.primary.mediumGrey}`,
      marginRight: space.m,
    },

    primaryMenuItem: {
      fontFamily: "'Montserrat', sans-serif",
      textTransform: "uppercase",
      color: palette.primary.darkGrey,
      margin: 0,
      marginRight: space.m,
      // textDecoration: "none",
    },

    buttonsWrapper: {
      display: "flex",
      alignItems: "center",
      "& div:first-of-type": {
        marginRight: space.m,
      },
    },

    // a: {
    //   display: "block",
    //   textDecoration: "none",
    //   color: "secondaryContrast",
    //   fontWeight: "500",
    //   cursor: "pointer",
    //   transition: "color 500ms ease",
    //   ":hover": {
    //     color: "text",
    //   },
    //   "@media screen and (max-width: 699px)": {
    //     marginBottom: "20px",
    //   },
    //   "@media screen and (min-width: 700px)": {
    //     marginLeft: "25px",
    //   },
    // },
    // listWrapper: {
    //   listStyle: "none",
    //   "@media screen and (max-width: 699px)": {
    //     display: isActive ? "flex" : "none",
    //     flexDirection: "column",
    //     fontSize: "25px",
    //     marginTop: "100px",
    //   },
    //   "@media screen and (min-width: 700px)": {
    //     fontSize: 3,
    //     display: "flex",
    //     justifyContent: "flex-end",
    //     flexDirection: "row",
    //   },
    // },
    hamburgerWrapper: {
      marginLeft: space.m,
      "@media screen and (min-width: 900px)": {
        display: "none",
      },
    },

    // hamburgerWrapper: {
    //   display: "flex",
    //   width: "40px",
    //   height: "25px;",
    //   justifyContent: "space-between",
    //   flexDirection: "column",
    //   position: "absolute",
    //   top: "20px",
    //   right: "20px",
    //   zIndex: 30000,
    //   cursor: "pointer",
    //   "@media screen and (min-width: 900px)": {
    //     display: "none",
    //   },
    // },
  };
};

export default getStyles;
