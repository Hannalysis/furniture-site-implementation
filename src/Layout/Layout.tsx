import classNames from "classnames";
import { Typography } from "../components/@ui/Typography/Typography";
import classes from "./Layout.module.css";
import themes from "./Themes.module.css";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react"

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


const Footer = () => {
  const [email, setEmail] = useState("");
  return (
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
        <div className={classes.furniroInfo}>
          <span>Furniro.</span>
          <p>999 University Drive Suite 999 Coral Gables,
             FL 99999 USA
          </p>
        </div>
        <div className={classes.footerLinks}>
          <span>Links</span>
          <ul>
            <li>
            <Typography variant="navlink" as={Link} to="/">
              Home
            </Typography>
            </li>
            <li>
            <Typography variant="navlink" as={Link} to="/shop">
              Shop
            </Typography>
            </li>
            <li>
            <Typography variant="navlink" as={Link} to="/about">
              About
            </Typography>
            </li>
            <li>
            <Typography variant="navlink" as={Link} to="/contact">
              Contact
            </Typography>
            </li>
          </ul> 
        </div>
        <div className={classes.footerHelp}>
          <span>Help</span>
          <ul>
            <li>
            <Typography variant="navlink" as={Link} to="/">
              Payment Options
            </Typography>
            </li>
            <li>
            <Typography variant="navlink" as={Link} to="/">
              Returns
            </Typography>
            </li>
            <li>
            <Typography variant="navlink" as={Link} to="/">
              Privacy Policy
            </Typography>
            </li>
          </ul>
        </div>
        <div className={classes.footerNewsletter}>
          <span>Newsletter</span>
          <div className={classes.inputAndSub}>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email Address"
              autoComplete="email"
            />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div className={classes.footerCopyright}>
        <Typography variant="body1">2023 furniro. All rights reverved</Typography>
      </div>
    </div>
    </footer>
  );
};