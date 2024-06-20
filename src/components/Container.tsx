import { ReactNode } from "react";
type TContainer = {
  children: ReactNode;
}
const Container = ({ children } : TContainer) => {
  return (
    <div className="w-full px-4 sm:px-20 mx-auto">{children}</div>
  );
};

export default Container;
