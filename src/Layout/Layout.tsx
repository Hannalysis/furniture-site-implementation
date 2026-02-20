import classNames from "classnames";
import { Typography } from "../components/@ui/Typography/Typography";
import classes from "./Layout.module.css";
import themes from "./Themes.module.css";
import { Outlet } from "react-router-dom";

const theme = "default";

export const Layout = () => {
  return (
    <div className={classNames(classes.root, themes[theme])}>
      <Header />
        <main className={classes.main}>
          <Outlet />
        </main>
      <Footer />
    </div>
  );
};

const Header = () => (
  <header className={classes.header}>
    <div className={classes.contentContainer}>
      <Typography variant="heading1">Test H1</Typography>
    </div>
  </header>
);

const Footer = () => (
  <footer className={classes.footer}>
    <div className={classes.contentContainer}>
      <Typography variant="body1">2023 furino. All rights reverved</Typography>
    </div>
  </footer>
);