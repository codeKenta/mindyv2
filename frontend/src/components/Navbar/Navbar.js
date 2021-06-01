import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import getStyles from "./styles";
import { makeStyles } from "@material-ui/core/styles";

import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import Hamburger from "./Hamburger";

const useStyles = makeStyles((theme) => getStyles(theme));

const nonAuthorizedMenu = [
  { label: "stories", path: "/stories" },
  { label: "other link", path: "/stories" },
];

const MainNav = () => {
  const [isActive, setIsActive] = useState(false);
  const classes = useStyles({ isActive });

  const handleHamburger = useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

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
    <>
      <div className={classes.root}>
        <nav className={classes.nav}>
          <Link href="/">
            <span className={classes.logo}>ZENOTE</span>
          </Link>

          <div className={classes.navGroupsWrapper}>
            <NavDesktop />
            <div className={classes.hamburgerWrapper}>
              <Hamburger isActive={isActive} handleClick={handleHamburger} />
            </div>
          </div>
        </nav>
      </div>

      <NavMobile isActive={isActive} />
    </>
  );
};

export default MainNav;
