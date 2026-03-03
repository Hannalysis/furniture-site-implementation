import classNames from "classnames";
import classes from "./Layout.module.css";
import themes from "./Themes.module.css";
import { Outlet } from "react-router-dom";

import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"

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