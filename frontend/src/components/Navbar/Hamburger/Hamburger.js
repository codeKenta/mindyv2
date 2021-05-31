import { bool, func } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import getStyles from "./styles";

const useStyles = makeStyles((theme) => getStyles(theme));

const Hamburger = ({ handleClick, isActive }) => {
  const classes = useStyles({ isActive });

  return (
    <button
      aria-label="Menu"
      onClick={handleClick}
      className={classes.root}
      type="button"
    >
      <span className={classes.outerSpan}>
        <span className={classes.innerSpan} />
      </span>
    </button>
  );
};

Hamburger.propTypes = {
  handleClick: func.isRequired,
  isActive: bool.isRequired,
};

export default Hamburger;
