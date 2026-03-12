import { Typography } from "../../../components/@ui/Typography/Typography";
import classes from "./BrowseTheRange.module.css"
import layoutClasses from "../../../Layout/Layout.module.css"

import imgDining1 from "../../../assets/home/browse-the-range/dining/img-dining-1.jpg"
import imgLiving1 from "../../../assets/home/browse-the-range/living/img-living-1.jpg"
import imgBedroom1 from "../../../assets/home/browse-the-range/bedroom/img-bedroom-1.jpg"


export const BrowseTheRange = () => (
    <section className={`
        ${layoutClasses.contentContainer}
        ${classes.browseTheRange}
        `}>
            <Typography variant="heading3">Browse The Range</Typography>
            <div className={classes.btrSubHeader}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className={classes.btrContentContainer}>
                <div className={classes.btrRoomContainer}>
                    <img
                    src={imgDining1}
                    alt="Minimalist Dining Room with chair and table"
                    className={classes.btrRoomImage}
                    />
                <Typography variant="heading4">Dining</Typography>
                </div>
                <div className={classes.btrRoomContainer}>
                    <img
                    src={imgLiving1}
                    alt="Minimalist Living Room with lounging chair and end table"
                    className={classes.btrRoomImage}
                    />
                <Typography variant="heading4">Living</Typography>
                </div>
                <div className={classes.btrRoomContainer}>
                    <img
                    src={imgBedroom1}
                    alt="Minimalist Bedroom with bed side table"
                    className={classes.btrRoomImage}
                    />
                <Typography variant="heading4">Bedroom</Typography>
                </div>
            </div>
    </section>
);