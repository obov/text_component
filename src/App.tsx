import { useState } from "react";
import Text from "./Text";
import { useTest } from "./text-alltags";

function App() {
  const [count, setCount] = useState(0);
  const vari = useTest({
    size: { hi: "hi" },
    weight: { hi: "hi" },
    color: { hi: "hi" },
  });
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex px-12 flex-col items-center justify-center h-60 bg-slate-700 rounded-lg gap-3">
        {vari.color.h}
      </div>
    </div>
  );
}

export default App;
