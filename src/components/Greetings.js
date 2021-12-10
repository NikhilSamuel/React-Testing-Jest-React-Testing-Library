import { useState } from "react";
import Output from "./Output";

const Greetings = () => {
  const [changedText, setChangedText] = useState(false);

  const clickHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h2>Hello World</h2>
      {!changedText && <Output>its good to see you.</Output>}
      {changedText && <Output>changed</Output>}
      <button onClick={clickHandler}>change text</button>
    </div>
  );
};
export default Greetings;
