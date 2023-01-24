# text_component

ease apply css on text with Tailwind and Typescript

- [이 영상을 접하고 테일윈드에 적용해봐도 좋을 것 같아 작성하였습니다](https://www.youtube.com/watch?v=b1NEj8HG1yU&t=382s&ab_channel=mewtru)
- [테일윈드](https://tailwindcss.com/)에 대한 가벼운 이해만 있다면 활용해볼 수 있습니다.

## 사용방법 - 주요 코드는 `text.tsx`에 모두 포함되어있습니다.

    1. `text.tsx` 의 `vaiants` 값과 `SEPERATOR` `SIZE`, `WEIGHT`, `COLOR` 값을 필요에 따라 수정하여 세팅할 수 있습니다.

```typescript
const variants = {
  size: {
    exSmall: "text-xs",
    small: "text-sm",
    base: "text-base",
    large: "text-lg",
    exLarge: "text-xl",
  }, // 필요한 글자 사이즈를 추가해주시거나나 key값을 변경하여 더 직관적으로 사용할 수 있습니다.
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
```

    2. 직접 호출하는 경우 `variant` 값을 작성할 때 몇글자만 입력해도 모든 조합의 자동완성이 호출됩니다. 입력하려는 앞글자 한두개씩만 입력하면 작성이 완료됩니다.

```typescript
     <Text variant="exSmall / exBold / accent">테일윈드 사용 시</Text>
     <Text variant="large / light / primary">좀더 직관적으로</Text>
     <Text variant="base / medium / secondary">문자를 꾸미는 방법입니다. </Text>
     <Text variant="exLarge / semibold / secondary" className="text-justify">타입스크립트 덕분에 자동완성 되는 부분이 인상적이었고</Text>
     <Text variant="large / bold / accent">명확하게 텍스트를 꾸미는 로직임을 알 수 있어 좋았습니다.</Text>
```
