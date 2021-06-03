const getStyles = (theme) => {
  const { space, palette, breakpoints } = theme;

  return {
    primaryMenu: {
      display: "none",
      [`@media screen and (min-width: ${breakpoints.navbar})`]: {
        listStyle: "none",
        display: "flex",
        padding: `${space.xxs} 0`,
        margin: 0,
        borderRight: `1px solid ${palette.primary.mediumGrey}`,
        marginRight: space.m,
      },
    },
    primaryMenuItem: {
      fontFamily: "'Montserrat', sans-serif",
      textTransform: "uppercase",
      color: palette.primary.darkGrey,
      margin: 0,
      marginRight: space.m,
      cursor: "pointer",
    },

    buttonsWrapper: {
      display: "none",
      [`@media screen and (min-width: ${breakpoints.navbar})`]: {
        display: "flex",
        alignItems: "center",
        "& div:first-of-type": {
          marginRight: space.m,
        },
      },
    },
  };
};

export default getStyles;
