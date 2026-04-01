import { Typography } from "../@ui/Typography/Typography";
import  layoutClasses  from "../../Layout/Layout.module.css";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import { useState } from "react"


export const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className={classes.footer}>
    <div className={`
      ${layoutClasses.contentContainer}
      ${layoutClasses.grid}
      ${classes.footerContainer}
    `}>
      <div className={`
      ${classes.footerNav}
      ${layoutClasses.grid}
      `}>
        <div className={classes.footerFurniroInfo}>
          <Typography variant="heading4">
              Furniro.
          </Typography>
          <p>999 University Drive Suite 999 Coral Gables, <br/>
             FL 99999 USA
          </p>
        </div>
        <div className={classes.footerLinks}>
          <Typography variant="subtitle2"
            className={classes.footerHeading}>
              Links
          </Typography>
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
          <Typography variant="subtitle2"
            className={classes.footerHeading}>
              Help
          </Typography>
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
          <Typography variant="subtitle2"
            className={classes.footerHeading}>
              Newsletter
          </Typography>
          <div className={classes.inputEmail}>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email Address"
              autoComplete="email"
            />
          </div>
        </div>
        <div className={classes.footerSubscribe}>
          <Typography variant ="subtitle2"
            className={classes.footerHeading}>
            &nbsp; {/*Empty header to give consistent spacing */}
          </Typography>
          <button 
            className={classes.subButton}>SUBSCRIBE</button>
        </div>
      </div>
      <div className={classes.footerCopyright}>
        <Typography variant="body1">2023 furniro. Design system demo</Typography>
      </div>
    </div>
    </footer>
  );
};