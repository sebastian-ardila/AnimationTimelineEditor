import { useState } from "react";

export const useParams = () => {
  const [background, setBackground] = useState("black");

  return {
    background,
    setBackground
  };
};
