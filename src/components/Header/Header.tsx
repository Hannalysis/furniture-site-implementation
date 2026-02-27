import { Typography } from "../@ui/Typography/Typography";
import  layoutClasses  from "../../Layout/Layout.module.css";
import classes from "./Header.module.css"
import { Link } from "react-router-dom";

/* Header icons */
import { MdOutlinePerson } from "react-icons/md";
import { BsExclamation } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";


export const Header = () => (
  <header className={classes.header}>
    <div className={`
      ${layoutClasses.contentContainer}
      ${layoutClasses.grid}
      ${classes.headerNav}
    `}>
      <div className={classes.furnio}>
        <a href="/">
          <img src="/icon-furniro.svg" alt="Furniro icon" />
          <Typography variant="brand">Furniro</Typography>
        </a>
      </div>
      <nav className={classes.headerPageNav} aria-label="Main navigation">
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
      </nav>
      <div className={classes.headerActions}>
        <button aria-label="Profile">
          <div className={classes.profileButton}>
            <MdOutlinePerson className={classes.reactIcon} />
            <BsExclamation className={classes.profileExclam} />
          </div>
        </button>

        <button aria-label="Search">
          <CiSearch className={`
          ${classes.reactIcon}
          ${classes.searchIcon}
          `}/>
        </button>

        <button aria-label="Favourites">
          <IoHeartOutline className={classes.reactIcon}  />
        </button>

        <button aria-label="Shopping basket">
          <AiOutlineShoppingCart className={classes.reactIcon}  />
        </button>
      </div>
    </div>
  </header>
);