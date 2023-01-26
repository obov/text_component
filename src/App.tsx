import { useState } from "react";
import Text from "./Text";
import text from "./text-alltags";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex px-12 flex-col items-center justify-center h-60 bg-slate-700 rounded-lg gap-3">
        <text.p variant="- / exBold / accent">테일윈드 사용 시</text.p>
        <text.div variant="large / * / ">좀더 직관적으로</text.div>
        <text.article variant="base / medium / secondary">
          문자를 꾸미는 방법입니다.
        </text.article>
        <text.span variant="exLarge / * / primary" className="text-justify">
          타입스크립트 덕분에 자동완성 되는 부분이 인상적이었고
        </text.span>
        <text.a variant="large / bold / ">
          명확하게 텍스트를 꾸미는 로직임을 알 수 있어 좋았습니다.
        </text.a>
      </div>
    </div>
  );
}

export default App;
