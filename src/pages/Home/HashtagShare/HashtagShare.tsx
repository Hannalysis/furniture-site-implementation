import { Typography } from "../../../components/@ui/Typography/Typography";
import classes from "./HashtagShare.module.css"

import { shareImages } from "../../../data/hashtagshareImages.data"


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
                    <img
                        src={shareImages[0]}
                        alt=""
                    />
                    <img
                        src={shareImages[1]}
                        alt=""
                    />
                </div>
               <div className={classes.shareImagesInnerBottomLeftBox}>
                    <img
                        src={shareImages[2]}
                        alt=""
                    />
                    <img
                        src={shareImages[3]}
                        alt=""
                    />
                </div>
            </div>
            <div className={classes.shareImagesCentreContainer}>
                <img
                    src={shareImages[4]}
                    alt=""
                />
            </div>
            <div className={classes.shareImagesRightContainer}>
                <div className={classes.shareImagesInnerTopRightBox}>
                    <img
                        src={shareImages[5]}
                        alt=""
                    />
                    <img
                        src={shareImages[6]}
                        alt=""
                    />
                </div>
               <div className={classes.shareImagesInnerBottomRightBox}>
                    <img
                        src={shareImages[7]}
                        alt=""
                    />
                    <img
                        src={shareImages[8]}
                        alt=""
                    />
                </div>
            </div>
        </div>
    </section>
);