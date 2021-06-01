import Link from "next/link";
import getStyles from "./styles";
import Button from "@components/Elements/Button";
import { makeStyles } from "@material-ui/core/styles";
import { buttonTypes } from "@types";

const useStyles = makeStyles((theme) => getStyles(theme));

const nonAuthorizedMenu = [
  { label: "stories", path: "/stories" },
  { label: "other link", path: "/stories" },
];

const NavDesktop = () => {
  const classes = useStyles();

  const isLoggedIn = false;

  return (
    <>
      <ul className={classes.primaryMenu}>
        {nonAuthorizedMenu.map(({ label, path }) => (
          <li key={label}>
            <Link href={path}>
              <span className={classes.primaryMenuItem}>{label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className={classes.buttonsWrapper}>
        <div>
          <Button type={buttonTypes.secondary}>Sign up </Button>
        </div>
        <div>
          <Button type={buttonTypes.primary}>Log in</Button>
        </div>
      </div>
    </>
  );
};

export default NavDesktop;
