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
  | "subtitle2";

type TypographyProps = {
  variant?: Variant;
  as?: React.ElementType;
  children: React.ReactNode;
};

export const Typography = ({
  variant = "body1",
  as,
  children,
}: TypographyProps) => {
  const variantMap = {
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
  };

  const Component = as || variantMap[variant];
  const variantStyles = classes[`typography-${variant}`];

  return <Component className={variantStyles}>{children}</Component>;
};
