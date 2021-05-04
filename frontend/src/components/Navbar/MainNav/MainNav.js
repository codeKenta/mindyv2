import { useState, useEffect } from "react";
import Link from "next/link";
import getStyles from "./styles";

import { makeStyles } from "@material-ui/core/styles";
import Hamburger from "../Hamburger";

const useStyles = makeStyles((theme) => getStyles(theme));

// import Logo from "@components/Logo";

const nonAuthorizedMenu = [{ label: "stories", path: "/stories" }];

const MainNav = () => {
  const [isActive, setIsActive] = useState(false);
  const classes = useStyles({ isActive });

  const isLoggedIn = false;

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isActive) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }
  }, [isActive]);

  return (
    <div className={classes.root}>
      <nav className={classes.nav}>
        <Link href="/">
          <div>
            <span>ZENOTE</span>
          </div>
        </Link>

        <ul>
          {nonAuthorizedMenu.map(({ label, path }) => (
            <li key={label}>
              <Link href={path}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* <Hamburger
        isActive={isActive}
        handleClick={(e) => setIsActive(!isActive)}
      /> */}
    </div>
  );
};

export default MainNav;
