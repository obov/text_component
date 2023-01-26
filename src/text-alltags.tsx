const SIZE = "size";
const WEIGHT = "weight";
const COLOR = "color";
const DEFAULT = "default";

const variants = {
  [SIZE]: {
    [DEFAULT]: ["base", "-"],
    exSmall: "text-xs",
    small: "text-sm",
    base: "text-base",
    large: "text-lg",
    exLarge: "text-xl",
  },
  [WEIGHT]: {
    [DEFAULT]: ["medium", "*"],
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    exBold: "font-extrabold",
  },
  [COLOR]: {
    [DEFAULT]: ["primary", ""],
    primary: "text-emerald-600",
    secondary: "text-amber-400",
    accent: "text-rose-400",
  },
} as const;

const SEPERATOR = " / ";

// 위쪽의 변수를 수정해주세요

type Seperator = typeof SEPERATOR;
type Size = typeof SIZE;
type Weight = typeof WEIGHT;
type Color = typeof COLOR;
type Default = typeof DEFAULT;

type Values<T> = T[keyof T];
type Variants = {
  [key in keyof typeof variants]:
    | keyof Omit<typeof variants[key], Default>
    | typeof variants[key][Default][1];
};
type VariantProps =
  `${Variants[Size]}${Seperator}${Variants[Weight]}${Seperator}${Variants[Color]}`;

const variantSpliter = (variantProps: VariantProps) => {
  const [size, weight, color] = variantProps.split(SEPERATOR);
  return { size, weight, color } as Variants;
};
const twClassMapper = ({ size, weight, color }: Variants) => {
  return [
    size === variants.size[DEFAULT][1]
      ? variants.size[variants.size[DEFAULT][0]]
      : variants.size[size],
    weight === variants.weight[DEFAULT][1]
      ? variants.weight[variants.weight[DEFAULT][0]]
      : variants.weight[weight],
    color === variants.color[DEFAULT][1]
      ? variants.color[variants.color[DEFAULT][0]]
      : variants.color[color],
  ];
};
const classNameMaker = (...classes: (string | undefined)[]) =>
  classes.filter((e) => e).join(" ");

const text = {
  a: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <a
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </a>
    );
  },
  abbr: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <abbr
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </abbr>
    );
  },
  address: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <address
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </address>
    );
  },
  area: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <area
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </area>
    );
  },
  article: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <article
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </article>
    );
  },
  aside: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <aside
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </aside>
    );
  },
  audio: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <audio
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </audio>
    );
  },
  b: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <b
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </b>
    );
  },
  base: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <base
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </base>
    );
  },
  bdi: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <bdi
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </bdi>
    );
  },
  bdo: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <bdo
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </bdo>
    );
  },
  big: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <big
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </big>
    );
  },
  blockquote: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <blockquote
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </blockquote>
    );
  },
  body: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <body
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </body>
    );
  },
  br: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <br
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </br>
    );
  },
  button: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <button
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </button>
    );
  },
  canvas: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <canvas
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </canvas>
    );
  },
  caption: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <caption
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </caption>
    );
  },
  center: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <center
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </center>
    );
  },
  cite: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <cite
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </cite>
    );
  },
  code: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <code
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </code>
    );
  },
  col: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <col
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </col>
    );
  },
  colgroup: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <colgroup
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </colgroup>
    );
  },
  data: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <data
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </data>
    );
  },
  datalist: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <datalist
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </datalist>
    );
  },
  dd: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <dd
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </dd>
    );
  },
  del: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <del
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </del>
    );
  },
  details: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <details
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </details>
    );
  },
  dfn: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <dfn
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </dfn>
    );
  },
  dialog: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <dialog
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </dialog>
    );
  },
  div: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <div
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </div>
    );
  },
  dl: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <dl
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </dl>
    );
  },
  dt: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <dt
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </dt>
    );
  },
  em: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <em
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </em>
    );
  },
  embed: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <embed
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </embed>
    );
  },
  fieldset: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <fieldset
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </fieldset>
    );
  },
  figcaption: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <figcaption
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </figcaption>
    );
  },
  figure: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <figure
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </figure>
    );
  },
  footer: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <footer
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </footer>
    );
  },
  form: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <form
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </form>
    );
  },
  h1: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <h1
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </h1>
    );
  },
  h2: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <h2
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </h2>
    );
  },
  h3: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <h3
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </h3>
    );
  },
  h4: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <h4
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </h4>
    );
  },
  h5: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <h5
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </h5>
    );
  },
  h6: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <h6
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </h6>
    );
  },
  head: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <head
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </head>
    );
  },
  header: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <header
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </header>
    );
  },
  hgroup: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <hgroup
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </hgroup>
    );
  },
  hr: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <hr
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </hr>
    );
  },
  html: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <html
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </html>
    );
  },
  i: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <i
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </i>
    );
  },
  iframe: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <iframe
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </iframe>
    );
  },
  img: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <img
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </img>
    );
  },
  input: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <input
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </input>
    );
  },
  ins: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <ins
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </ins>
    );
  },
  kbd: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <kbd
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </kbd>
    );
  },
  keygen: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <keygen
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </keygen>
    );
  },
  label: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <label
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </label>
    );
  },
  legend: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <legend
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </legend>
    );
  },
  li: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <li
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </li>
    );
  },
  link: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <link
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </link>
    );
  },
  main: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <main
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </main>
    );
  },
  map: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <map
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </map>
    );
  },
  mark: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <mark
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </mark>
    );
  },
  menu: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <menu
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </menu>
    );
  },
  menuitem: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <menuitem
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </menuitem>
    );
  },
  meta: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <meta
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </meta>
    );
  },
  meter: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <meter
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </meter>
    );
  },
  nav: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <nav
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </nav>
    );
  },
  noindex: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <noindex
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </noindex>
    );
  },
  noscript: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <noscript
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </noscript>
    );
  },
  object: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <object
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </object>
    );
  },
  ol: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <ol
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </ol>
    );
  },
  optgroup: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <optgroup
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </optgroup>
    );
  },
  option: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <option
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </option>
    );
  },
  output: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <output
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </output>
    );
  },
  p: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <p
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </p>
    );
  },
  param: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <param
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </param>
    );
  },
  picture: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <picture
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </picture>
    );
  },
  pre: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <pre
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </pre>
    );
  },
  progress: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <progress
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </progress>
    );
  },
  q: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <q
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </q>
    );
  },
  rp: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <rp
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </rp>
    );
  },
  rt: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <rt
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </rt>
    );
  },
  ruby: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <ruby
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </ruby>
    );
  },
  s: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <s
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </s>
    );
  },
  samp: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <samp
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </samp>
    );
  },
  slot: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <slot
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </slot>
    );
  },
  script: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <script
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </script>
    );
  },
  section: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <section
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </section>
    );
  },
  select: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <select
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </select>
    );
  },
  small: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <small
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </small>
    );
  },
  source: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <source
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </source>
    );
  },
  span: ({
    value,
    variant,
    className,
  }: {
    value: string;
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
        {value}
      </span>
    );
  },
  strong: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <strong
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </strong>
    );
  },
  style: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <style
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </style>
    );
  },
  sub: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <sub
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </sub>
    );
  },
  summary: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <summary
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </summary>
    );
  },
  sup: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <sup
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </sup>
    );
  },
  table: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <table
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </table>
    );
  },
  template: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <template
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </template>
    );
  },
  tbody: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <tbody
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </tbody>
    );
  },
  td: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <td
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </td>
    );
  },
  textarea: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <textarea
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </textarea>
    );
  },
  tfoot: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <tfoot
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </tfoot>
    );
  },
  th: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <th
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </th>
    );
  },
  thead: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <thead
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </thead>
    );
  },
  time: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <time
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </time>
    );
  },
  title: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <title
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </title>
    );
  },
  tr: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <tr
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </tr>
    );
  },
  track: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <track
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </track>
    );
  },
  u: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <u
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </u>
    );
  },
  ul: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <ul
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </ul>
    );
  },
  var: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <var
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </var>
    );
  },
  video: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <video
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </video>
    );
  },
  wbr: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <wbr
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </wbr>
    );
  },
  webview: ({
    value,
    variant,
    className,
  }: {
    value: string;
    variant: VariantProps;
    className?: string;
  }) => {
    return (
      <webview
        className={classNameMaker(
          ...twClassMapper(variantSpliter(variant)),
          className
        )}
      >
        {value}
      </webview>
    );
  },
};
export default text;
