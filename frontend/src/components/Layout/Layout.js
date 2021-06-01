import PropTypes from "prop-types";
// import LocaleContext from "@context/LocaleContext";
// eslint-disable-next-line no-unused-vars

import Navbar from "@components/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
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
