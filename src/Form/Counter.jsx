// Example to change local variable using useState

import { useState } from "react";

export default function Form() {
  let [counter, setCounter] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter + 1);
          console.log(counter);
        }}
      >
        Increment
      </button>
      <h1>Counter : {counter}</h1>
    </div>
  );
}
