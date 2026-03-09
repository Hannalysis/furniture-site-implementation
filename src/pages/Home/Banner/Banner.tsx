// import { Typography } from "../../components/@ui/Typography/Typography";
import classes from "./Banner.module.css"
import layoutClasses from "../../../Layout/Layout.module.css"

import heroBackground from "../../../assets/home/banner/hero-background.jpg"

export const Banner = () => (
  <section className={`
        ${layoutClasses.wideContainer}
        ${classes.banner}
        `}>
            <img
                src={heroBackground}
                alt="heroImage"
                loading="lazy"
                className={classes.bannerImage}
            />
    </section>
);