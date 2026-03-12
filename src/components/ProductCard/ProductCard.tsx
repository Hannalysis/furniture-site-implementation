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
      <p>{product.title}</p>
      <p>{product.desc}</p>
      <p>{product.price}</p>
      {product.wasPrice && <p>{product.wasPrice}</p>}
    </div>
  )
}