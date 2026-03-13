import { Typography } from "../Typography/Typography";
import classes from "./ShowMoreButton.module.css"


export const ShowMoreButton = () => {
  return (
    <button className={classes.buttonShowMore}>
       <Typography variant="heading6">Show More</Typography>
    </button>
  );
};