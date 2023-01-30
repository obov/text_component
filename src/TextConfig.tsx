import { createContext, ReactNode } from "react";
import { ThemeContext, variants } from "./text-alltags";
const TextConfig = ({
  size,
  weight,
  color,
  children,
}: {
  size: {};
  weight: {};
  color: {};
  children: ReactNode;
}) => {
  return (
    <ThemeContext.Provider value={variants}>{children}</ThemeContext.Provider>
  );
};

export default TextConfig;
