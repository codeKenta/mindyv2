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

const NavMobile = ({ isActive }) => {
  const classes = useStyles({ isActive });

  return (
    <nav className={classes.root}>
      <div className={classes.buttonsWrapper}>
        <div>
          <Button type={buttonTypes.secondary}>Sign up </Button>
        </div>
        <div>
          <Button type={buttonTypes.primary}>Log in</Button>
        </div>
      </div>

      <ul className={classes.primaryMenu}>
        {nonAuthorizedMenu.map(({ label, path }) => (
          <li className={classes.primaryMenuItem} key={label}>
            <Link href={path}>
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMobile;
