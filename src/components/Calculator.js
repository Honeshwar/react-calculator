import { useState } from "react";
import Buttons from "./Buttons";

export default function Calculator() {
  const [input, setInput] = useState("");

  return (
    <div className="calculator">
      <textarea
        type="text"
        className="result-screen"
        disabled
        resize="none"
        value={input}
      ></textarea>

      <Buttons input={input} setInput={setInput} />
    </div>
  );
}
