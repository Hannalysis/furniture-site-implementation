import classes from "./Typography.module.css";

type Variant =
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading4"
  | "heading5"
  | "heading6"
  | "body1"
  | "body2"
  | "caption"
  | "inherit"
  | "overline"
  | "subtitle1"
  | "subtitle2"
  | "brand"
  | "navlink"
  ;

type TypographyOwnProps<E extends React.ElementType = "span"> = {
  variant?: Variant;
  as?: E;
  children: React.ReactNode;
};

type TypographyProps<E extends React.ElementType> = TypographyOwnProps<E> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof TypographyOwnProps>;

export const Typography = <E extends React.ElementType = "span">({
  variant = "body1",
  as,
  children,
  ...props
}: TypographyProps<E>) => {
  const variantMap: Record<Variant, React.ElementType> = {
    heading1: "h1",
    heading2: "h2",
    heading3: "h3",
    heading4: "h4",
    heading5: "h5",
    heading6: "h6",
    body1: "p",
    body2: "p",
    caption: "p",
    inherit: "p",
    overline: "span",
    subtitle1: "p",
    subtitle2: "p",
    brand: "span",
    navlink: "a",
  };

  const Component = as || variantMap[variant];
  const variantStyles = classes[`typography-${variant}`];

  return <Component className={variantStyles}{...props}>{children}</Component>;
};
