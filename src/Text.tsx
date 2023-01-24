const variants = {
  size: {
    exSmall: "text-xs",
    small: "text-sm",
    base: "text-base",
    large: "text-lg",
    exLarge: "text-xl",
  },
  weight: {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    exBold: "font-extrabold",
  },
  color: {
    primary: "text-emerald-600",
    secondary: "text-amber-400",
    accent: "text-rose-400",
  },
};

const SEPERATOR = " / ";
const SIZE = "size";
const WEIGHT = "weight";
const COLOR = "color";

// 위쪽의 변수를 수정해주세요

type Seperator = typeof SEPERATOR;
type Size = typeof SIZE;
type Weight = typeof WEIGHT;
type Color = typeof COLOR;

type Values<T> = T[keyof T];
type Variants = {
  [key in keyof typeof variants]: keyof typeof variants[key];
};
type VariantProps =
  `${Variants[Size]}${Seperator}${Variants[Weight]}${Seperator}${Variants[Color]}`;

const variantSpliter = (variantProps: VariantProps) => {
  const [size, weight, color] = variantProps.split(SEPERATOR);
  return { size, weight, color } as Variants;
};
const twClassMapper = ({ size, weight, color }: Variants) => {
  return [variants.size[size], variants.weight[weight], variants.color[color]];
};
const classNameMaker = (...classes: (string | undefined)[]) =>
  classes.filter((e) => e).join(" ");

const Text = ({
  children,
  variant,
  className,
}: {
  children: string;
  variant: VariantProps;
  className?: string;
}) => {
  return (
    <span
      className={classNameMaker(
        ...twClassMapper(variantSpliter(variant)),
        className
      )}
    >
      {children}
    </span>
  );
};

export default Text;
