import { useState } from "react";
export const useBodyContent = () => {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

  return {
    width,
    height,
    setWidth,
    setHeight
  };
};
