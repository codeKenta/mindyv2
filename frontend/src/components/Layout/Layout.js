import PropTypes from "prop-types";
import Navbar from "@components/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import getStyles from "./styles";

const useStyles = makeStyles((theme) => getStyles(theme));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <div className={classes.contentWrapper}>
        <main>{children}</main>
        <footer>this is footer</footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

Layout.defaultProps = {
  data: {},
};

export default Layout;
