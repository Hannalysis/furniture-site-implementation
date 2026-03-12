import { Typography } from "../../../components/@ui/Typography/Typography";
import classes from "./OurProducts.module.css"
import layoutClasses from "../../../Layout/Layout.module.css"

import { ProductCard } from "../../../components/ProductCard/ProductCard"

import imgProduct1 from "../../../assets/home/our-products/img-syltherine-stylish-cafe-table.jpg"
import imgProduct2 from "../../../assets/home/our-products/img-leviosa-stylish-cafe-chair.jpg"
import imgProduct3 from "../../../assets/home/our-products/img-lolito-luxury-big-sofa.jpg"
import imgProduct4 from "../../../assets/home/our-products/img-respira-outdoor-bar-table-and-stool.jpg"
import imgProduct5 from "../../../assets/home/our-products/img-grifo-night-lamp.jpg"
import imgProduct6 from "../../../assets/home/our-products/img-muggo-small-mug.jpg"
import imgProduct7 from "../../../assets/home/our-products/img-pingky-cute-bed-set.jpg"
import imgProduct8 from "../../../assets/home/our-products/img-potty-minimalist-flower-pot.jpg"

const products = [
  { id: 1, title: "Syltherine", image: imgProduct1, desc: "Stylish cafe table", price: "Rp 2.500.000", wasPrice: "Rp 3.500.000"},
  { id: 2, title: "Levisoa", image: imgProduct2, desc: "Stylish cafe chair", price: "Rp 2.500.000"},
  { id: 3, title: "Lilito", image: imgProduct3, desc: "Luxury big sofa", price: "Rp 7.000.000", wasPrice: "Rp 14.000.000"},
  { id: 4, title: "Respira", image: imgProduct4, desc: "Outdoor bar table and stool", price: "Rp 500.000"},
  { id: 5, title: "Grifo", image: imgProduct5, desc: "Night lamp", price: "Rp 1.500.000"},
  { id: 6, title: "Muggo", image: imgProduct6, desc: "Small mug", price: "Rp 150.000"},
  { id: 7, title: "Pingky", image: imgProduct7, desc: "Cute bed set", price: "Rp 7.000.000", wasPrice: "Rp 14.000.000"},
  { id: 8, title: "Potty", image: imgProduct8, desc: "Minimalist flower pot", price: "Rp 500.000"},
]

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
            <button>Show More</button>
    </section>
);