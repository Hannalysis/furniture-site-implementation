import { Typography } from "../../../components/@ui/Typography/Typography";
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
                alt=""
                className={classes.bannerImage}
            />
            <div className={classes.bannerDiscoverBox}>
                    <Typography variant="overline">New Arrival</Typography>
                    <Typography variant="heading1">Discover Our New Collection</Typography>
                    <Typography variant="subtitle1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
                        luctus nec ullamcorper mattis.
                    </Typography>
                    <button className={classes.bannerBuyButton}>BUY NOW</button>
            </div>
    </section>
);