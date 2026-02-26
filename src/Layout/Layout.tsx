import classNames from "classnames";
import { Typography } from "../components/@ui/Typography/Typography";
import classes from "./Layout.module.css";
import themes from "./Themes.module.css";
import { Outlet } from "react-router-dom";

import { Header } from "../components/Header/Header"

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


const Footer = () => (
  <footer className={classes.footer}>
    <div className={`
      ${classes.contentContainer}
      ${classes.grid}
      ${classes.footerContainer}
    `}>
      <div className={`
      ${classes.footerNav}
      ${classes.grid}
      `}>
        <div className={classes.furniroInfo}></div>
        <div className={classes.footerLinks}></div>
        <div className={classes.footerHelp}></div>
        <div className={classes.footerNewsletter}></div>
      </div>
      <div className={classes.footerCopyright}>
        <Typography variant="body1">2023 furino. All rights reverved</Typography>
      </div>
    </div>
  </footer>
);