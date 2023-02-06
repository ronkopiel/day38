import React, { useEffect, useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [isButtonDisabled, setFlag] = useState<boolean>(true);
  const [buttonText, setText] = useState<string>("stop count");

  useEffect(() => {
    console.log(`Count updated to ${count}`);
    isButtonDisabled ? setText("disable counter") : setText("enable counter");
  }, [count, isButtonDisabled]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button
        id="counter"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
      <button
        onClick={() => {
          setFlag(!isButtonDisabled);
          const addButton = document.getElementById(
            "counter"
          ) as HTMLButtonElement;
          addButton.toggleAttribute("disabled");
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Counter;
