// const isActive = false;

const getStyles = (theme) => {
  const { space, palette, props } = theme;

  console.log(props);

  const inner = {
    width: 30,
    height: 4,
    backgroundColor: palette.primary.main,
    borderRadius: 4,
    position: "absolute",
    transitionProperty: "transform",
    transitionDuration: "0.15s",
    transitionTimingFunction: "ease",
  };

  return {
    root: {
      padding: 0,
      margin: 0,
      border: 0,
      cursor: "pointer",
      transitionProperty: "opacity, filter",
      transitionDuration: "0.15s",
      transitionTimingFunction: "linear",
      color: "inherit",
      backgroundColor: "transparent",
      overflow: "visible",
      outline: "none",
      display: "flex",
      right: "20px",
      zIndex: "99999999",
    },
    outerSpan: {
      width: 30,
      height: 24,
      display: "inline-block",
      position: "relative",
    },
    innerSpan: {
      ...inner,
      display: "block",
      top: "50%",
      marginTop: "-2px",
      transitionDuration: "0.075s",
      transitionTimingFunction: ({ isActive }) =>
        isActive
          ? "cubic-bezier(0.215, 0.61, 0.355, 1)"
          : "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
      transform: ({ isActive }) => (isActive ? "rotate(45deg)" : null),
      transitionDelay: ({ isActive }) => (isActive ? "0.12s" : null),
      "&:before": {
        ...inner,
        display: "block",
        content: '""',
        top: ({ isActive }) => (isActive ? 0 : -10),
        opacity: ({ isActive }) => (isActive ? 0 : 1),
        transition: ({ isActive }) =>
          isActive
            ? "top 0.075s ease, opacity 0.075s 0.12s ease"
            : "top 0.075s 0.12s ease, opacity 0.075s ease",
      },
      "&:after": {
        ...inner,
        display: "block",
        content: '""',
        bottom: ({ isActive }) => (isActive ? 0 : -10),
        transition: ({ isActive }) =>
          isActive
            ? "bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1)"
            : "bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19)",
        transform: ({ isActive }) => (isActive ? "rotate(-90deg)" : null),
      },
    },
  };
};

export default getStyles;
