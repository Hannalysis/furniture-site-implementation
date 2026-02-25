// import { Typography } from "../../components/@ui/Typography/Typography";
import classes from "./Inspirations.module.css"
import layoutClasses from "../../../Layout/Layout.module.css"

export const Inspirations = () => (
    <section className={`${classes.inspirations}`}>
        <div className= {
            `${layoutClasses.contentContainer}
            ${layoutClasses.grid}
            ${classes.inspirationsContainer}`}>
        </div>
    </section>
);