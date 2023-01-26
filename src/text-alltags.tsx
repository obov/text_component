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
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </a>
    );
  },
  abbr: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </abbr>
    );
  },
  address: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </address>
    );
  },
  area: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </area>
    );
  },
  article: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </article>
    );
  },
  aside: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </aside>
    );
  },
  audio: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </audio>
    );
  },
  b: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </b>
    );
  },
  base: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </base>
    );
  },
  bdi: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </bdi>
    );
  },
  bdo: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </bdo>
    );
  },
  big: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </big>
    );
  },
  blockquote: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </blockquote>
    );
  },
  body: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </body>
    );
  },
  br: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </br>
    );
  },
  button: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </button>
    );
  },
  canvas: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </canvas>
    );
  },
  caption: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </caption>
    );
  },
  center: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </center>
    );
  },
  cite: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </cite>
    );
  },
  code: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </code>
    );
  },
  col: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </col>
    );
  },
  colgroup: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </colgroup>
    );
  },
  data: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </data>
    );
  },
  datalist: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </datalist>
    );
  },
  dd: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </dd>
    );
  },
  del: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </del>
    );
  },
  details: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </details>
    );
  },
  dfn: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </dfn>
    );
  },
  dialog: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </dialog>
    );
  },
  div: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </div>
    );
  },
  dl: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </dl>
    );
  },
  dt: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </dt>
    );
  },
  em: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </em>
    );
  },
  embed: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </embed>
    );
  },
  fieldset: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </fieldset>
    );
  },
  figcaption: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </figcaption>
    );
  },
  figure: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </figure>
    );
  },
  footer: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </footer>
    );
  },
  form: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </form>
    );
  },
  h1: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </h1>
    );
  },
  h2: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </h2>
    );
  },
  h3: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </h3>
    );
  },
  h4: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </h4>
    );
  },
  h5: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </h5>
    );
  },
  h6: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </h6>
    );
  },
  head: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </head>
    );
  },
  header: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </header>
    );
  },
  hgroup: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </hgroup>
    );
  },
  hr: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </hr>
    );
  },
  html: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </html>
    );
  },
  i: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </i>
    );
  },
  iframe: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </iframe>
    );
  },
  img: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </img>
    );
  },
  input: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </input>
    );
  },
  ins: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </ins>
    );
  },
  kbd: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </kbd>
    );
  },
  keygen: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </keygen>
    );
  },
  label: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </label>
    );
  },
  legend: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </legend>
    );
  },
  li: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </li>
    );
  },
  link: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </link>
    );
  },
  main: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </main>
    );
  },
  map: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </map>
    );
  },
  mark: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </mark>
    );
  },
  menu: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </menu>
    );
  },
  menuitem: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </menuitem>
    );
  },
  meta: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </meta>
    );
  },
  meter: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </meter>
    );
  },
  nav: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </nav>
    );
  },
  noindex: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </noindex>
    );
  },
  noscript: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </noscript>
    );
  },
  object: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </object>
    );
  },
  ol: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </ol>
    );
  },
  optgroup: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </optgroup>
    );
  },
  option: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </option>
    );
  },
  output: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </output>
    );
  },
  p: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </p>
    );
  },
  param: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </param>
    );
  },
  picture: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </picture>
    );
  },
  pre: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </pre>
    );
  },
  progress: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </progress>
    );
  },
  q: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </q>
    );
  },
  rp: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </rp>
    );
  },
  rt: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </rt>
    );
  },
  ruby: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </ruby>
    );
  },
  s: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </s>
    );
  },
  samp: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </samp>
    );
  },
  slot: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </slot>
    );
  },
  script: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </script>
    );
  },
  section: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </section>
    );
  },
  select: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </select>
    );
  },
  small: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </small>
    );
  },
  source: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </source>
    );
  },
  span: ({
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
  },
  strong: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </strong>
    );
  },
  style: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </style>
    );
  },
  sub: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </sub>
    );
  },
  summary: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </summary>
    );
  },
  sup: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </sup>
    );
  },
  table: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </table>
    );
  },
  template: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </template>
    );
  },
  tbody: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </tbody>
    );
  },
  td: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </td>
    );
  },
  textarea: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </textarea>
    );
  },
  tfoot: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </tfoot>
    );
  },
  th: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </th>
    );
  },
  thead: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </thead>
    );
  },
  time: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </time>
    );
  },
  title: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </title>
    );
  },
  tr: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </tr>
    );
  },
  track: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </track>
    );
  },
  u: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </u>
    );
  },
  ul: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </ul>
    );
  },
  var: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </var>
    );
  },
  video: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </video>
    );
  },
  wbr: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </wbr>
    );
  },
  webview: ({
    children,
    variant,
    className,
  }: {
    children: string;
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
        {children}
      </webview>
    );
  },
};
export default text;
