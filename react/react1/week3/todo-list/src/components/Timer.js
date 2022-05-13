import { useEffect, useState } from "react";

export const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  });

  return (
    <div className="timer">
      You have spend {count} seconds on this web-page.
    </div>
  );
};
