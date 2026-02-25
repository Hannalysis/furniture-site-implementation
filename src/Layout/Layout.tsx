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
    <div className={`
      ${classes.contentContainer}
      ${classes.grid}
      ${classes.headerNav}
    `}>
      <div className={classes.furnio}>
        <a href="/">
          <img src="/icon-furnio.svg" alt="Furnio icon" />
          <span>Furnio</span>
        </a>
      </div>
      <nav className={classes.headerPageNav} aria-label="Main navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className={classes.headerActions}>
        <button aria-label="Search">
          {/* <SearchIcon /> */}
        </button>

        <button aria-label="Profile">
          {/* <UserIcon /> */}
        </button>

        <button aria-label="Favourites">
          {/* <HeartIcon /> */}
        </button>

        <button aria-label="Shopping basket">
          {/* <CartIcon /> */}
        </button>
      </div>
    </div>
  </header>
);

const Footer = () => (
  <footer className={classes.footer}>
    <div className={`
      ${classes.contentContainer}
      ${classes.grid}
      ${classes.footerContainer}
    `}>
      <div className={classes.footerNav}></div>
      <div className={classes.footerCopyright}>
        <Typography variant="body1">2023 furino. All rights reverved</Typography>
      </div>
    </div>
  </footer>
);