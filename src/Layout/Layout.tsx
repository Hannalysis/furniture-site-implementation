import classNames from "classnames";
import type { ReactNode } from "react";
import { Typography } from "../components/@ui/Typography/Typography";
import classes from "./Layout.module.css";
import themes from "./Themes.module.css";

const theme = "default";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={classNames(classes.root, themes[theme])}>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </div>
  );
};

const Header = () => (
  <header className={classes.header}>
    <Typography variant="heading1">Test H1</Typography>
  </header>
);

const Footer = () => <footer className={classes.footer}></footer>;