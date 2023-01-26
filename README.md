# text_component

ease apply css on text with Tailwind and Typescript

- [이 영상을 접하고 테일윈드에 적용해봐도 좋을 것 같아 작성하였습니다](https://www.youtube.com/watch?v=b1NEj8HG1yU&t=382s&ab_channel=mewtru)
- [테일윈드](https://tailwindcss.com/)에 대한 가벼운 이해만 있다면 활용해볼 수 있습니다.
- 클래스 / 클래스네임 (문자열) 을 사용하여 css를 적용하는 경우 테일윈드를 사용하지 않아도 적용가능합니다. 그렇게 생각해보자면 타입스크립트를 사용하는 꽤나 많은 프로젝트에 적용해볼수 있는 방식이라고 생각합니다.


### 사용예시

```typescript
import text from "./text-alltags";

<text.p variant="large / exBold / accent" value="문자 입력" />
```
위와 같이 입력시 다음과 같이 출력됩니다.
```html
<p class="text-base font-extrabold text-rose-400">테일윈드 사용 시</p>
```

### 사용방법 - 주요 코드는 `text-alltag.tsx`에 모두 포함되어있습니다.

- text는 object로써 React에서 지원하는 모든 element를 호출할 수 있습니다
- variant 값에 "(크기) / (굵기) / (색상)" 의 순서로 넣어 tailwind를(class를) 적용합니다.
- variant 에 값을 입력하는 경우 typescript 덕분에 입력할수 있는 모든 경우의 수를 바로 확인할 수 있습니다.
- variant 는 디폴트 값을 지정할 수 있고 다음과 같이 작성할 수 있습니다.

```typescript
<t.div variant="- / * / " value="디폴트 값을 활용하면 더 깔끔합니다" />
<t.div variant=" /  / " value="모두 빈문자열로 지정한 경우" />
```

### 초기 세팅하기

1. `text-alltag.tsx` 의 `vaiants` 값과 `SEPERATOR` 필요에 따라 수정하여 세팅할 수 있습니다.

```typescript

const SEPERATOR = " / ";
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


```

2. 필요한 곳에 호출하여 사용하면 됩니다.

```typescript
import t from "./text-alltags";

    <t.p variant="- / exBold / accent" value="타입스크립트 사용 시" />
    <t.div variant="large / * / " value="좀더 직관적으로" />
    <t.article
      variant="base / medium / secondary"
      value="class를 전달하는 방법입니다."
    />
    <t.span
      variant="exLarge / * / "
      className="text-justify"
      value="타입스크립트 덕분에 자동완성 되는 부분이 인상적이었고"
    />
    <t.a
      variant="large / bold / "
      value="명확하게 텍스트를 꾸미는 로직임을 알 수 있어 좋았습니다."
    />
```
