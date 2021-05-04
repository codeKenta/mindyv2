import PropTypes from "prop-types";
// import LocaleContext from "@context/LocaleContext";
// eslint-disable-next-line no-unused-vars

import MainNav from "@components/Navbar/MainNav";

const Layout = ({ children }) => {
  return (
    <>
      <MainNav />
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
  data: PropTypes.object,
  location: PropTypes.object.isRequired,
  pageResources: PropTypes.object.isRequired,
};

Layout.defaultProps = {
  data: {},
};

export default Layout;
