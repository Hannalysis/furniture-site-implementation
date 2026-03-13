import { Typography } from "../@ui/Typography/Typography"
import classes from "./ProductCard.module.css"


export type ProductCardData = {
  id: number
  title: string
  image: string
  desc: string
  price: string
  wasPrice?: string
  sticker?: Sticker
}

type Props = {
  product: ProductCardData
}

export type Sticker = {
  type: "sale" | "new" ;
  label: string;                    
};


export function ProductCard({ product }: Props) {
  return (
    <div className={classes.productCard}>
      {product.sticker && <div className={`
      ${classes.productSticker} ${
        product.sticker.type === "sale"
        ? classes.sale
        : product.sticker.type === "new"
        ? classes.new
        : ""
      }`}>
      <Typography variant="heading6">{product.sticker.label}</Typography></div>}
      <img src={product.image} alt={product.title} />
      <div className={classes.productContentContainer}>
        <Typography variant="heading4">{product.title}</Typography>
        <Typography variant="heading6">{product.desc}</Typography>
        <div className={classes.productPriceContainer}>
            <Typography variant="heading5">{product.price}</Typography>
            {product.wasPrice && <Typography variant="heading6">{product.wasPrice}</Typography>}
        </div>
      </div>
    </div>
  )
}