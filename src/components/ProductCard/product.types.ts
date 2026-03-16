export type ProductCardData = {
  id: number
  title: string
  image: string
  desc: string
  price: string
  wasPrice?: string
  sticker?: Sticker
}

type Sticker = {
  type: "sale" | "new" ;
  label: string;                    
};