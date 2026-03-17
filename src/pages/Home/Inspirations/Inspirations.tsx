import { Typography } from "../../../components/@ui/Typography/Typography";
import classes from "./Inspirations.module.css"
import layoutClasses from "../../../Layout/Layout.module.css"

import { BsArrowRight } from "react-icons/bs";
// import { PiArrowRightThin } from "react-icons/pi";

import imgInspirationsInnerPeace from "../../../assets/home/inspiration/img-inspiration-bed-room-inner-peace.jpg"


export const Inspirations = () => (
    <section className={`${classes.inspirations}`}>
        <div className={
            `${layoutClasses.contentContainer}
            ${classes.inspirationsContainer}`}>
                <div className={classes.inspirationsHeaderContainer}>
                    <Typography variant="heading2">50+ Beautiful rooms inspiration</Typography>
                    <Typography variant="heading6">Our designer already made a lot of beautiful prototype of rooms that inspire you</Typography>
                    <button className={classes.buttonExploreMore}>Explore More</button>
                </div>
                <div className={classes.inspirationsRoomCardContainer}>
                    <img
                        src={imgInspirationsInnerPeace}
                        alt="Minimalist bed room with a wall of art in frames"
                        className={classes.inspirationsImg}
                    />
                    <div className={classes.inspirationsRoomCardContentContainer}>
                        <div className={classes.inspirationsRoomCardBox}>
                            <div className={classes.inspirationsRoomCardLabel}>
                                <Typography variant="heading6">01</Typography>
                                <div className={classes.inspirationsLongEmDash}></div>
                                <Typography variant="heading6">Bed Room</Typography>
                            </div>
                            <div className={classes.inspirationsInnerPeaceText}>Inner Peace</div>
                        </div>
                        <div className={classes.inspirationsButtonContainer}>
                            <button className={classes.buttonRightArrow}><BsArrowRight className={classes.reactIcon} /></button>
                        </div>
                    </div>
                </div>
                <div className={classes.inspirationsCarousel}></div>
        </div>
    </section>
);