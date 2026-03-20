import { Typography } from "../../../components/@ui/Typography/Typography";
import classes from "./HashtagShare.module.css"

export const HashtagShare = () => (
    <section className={`
        ${classes.hashtagShare}
        `}>
        <div className={classes.shareHeaderContainer}>
            <Typography variant="heading5">Share your setup with</Typography>
            <Typography variant="heading2">#FurniroFurniture</Typography>
        </div>
        <div className={classes.shareImagesContainer}>
            <div className={classes.shareImagesLeftContainer}>
                <div className={classes.shareImagesInnerTopLeftBox}>

                </div>
               <div className={classes.shareImagesInnerBottomLeftBox}>

                </div>
            </div>
            <div className={classes.shareImagesCentreContainer}>
                
            </div>
            <div className={classes.shareImagesRightContainer}>
                <div className={classes.shareImagesInnerTopRightBox}>

                </div>
               <div className={classes.shareImagesInnerBottomRightBox}>

                </div>
            </div>
        </div>
    </section>
);