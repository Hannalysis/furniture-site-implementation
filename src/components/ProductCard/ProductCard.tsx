import { Typography } from "../@ui/Typography/Typography"
import classes from "./ProductCard.module.css"

type ProductCardData = {
  id: number
  title: string
  image: string
  desc: string
  price: string
  wasPrice?: string
}

type Props = {
  product: ProductCardData
}

export function ProductCard({ product }: Props) {
  return (
    <div className={classes.productCard}>
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