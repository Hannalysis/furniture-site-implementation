import { Typography } from "../../../components/@ui/Typography/Typography";
import classes from "./OurProducts.module.css"
import layoutClasses from "../../../Layout/Layout.module.css"

import { ProductCard } from "../../../components/ProductCard/ProductCard"
import { ShowMoreButton } from "../../../components/@ui/ShowMoreButton/ShowMoreButton";

import { products } from "../../../data/products.data";


export const OurProducts = () => (
    <section className={`
        ${layoutClasses.contentContainer}
        ${classes.ourProducts}
        `}>
            <Typography variant="heading2">Our Products</Typography>
            <div className={`
            ${layoutClasses.grid}
            ${classes.ourProductsCardContainer}`}>
                  {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </div>
            <ShowMoreButton />
    </section>
);