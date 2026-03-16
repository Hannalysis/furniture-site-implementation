import { Typography } from "../../../components/@ui/Typography/Typography";
import classes from "./Inspirations.module.css"
import layoutClasses from "../../../Layout/Layout.module.css"


export const Inspirations = () => (
    <section className={`${classes.inspirations}`}>
        <div className={
            `${layoutClasses.contentContainer}
            ${classes.inspirationsContainer}`}>
                <div className={classes.inspirationsHeaderContainer}>
                    <Typography variant="heading2">50+ Beautiful rooms inspiration</Typography>
                    <Typography variant="heading6">Our designer already made a lot of beautiful prototipe of rooms that inspire you</Typography>
                    <button className={classes.buttonExploreMore}>Explore More</button>
                </div>
                <div className={classes.inspirationsRoomCardContainer}></div>
                <div className={classes.inspirationsCarousel}></div>
        </div>
    </section>
);