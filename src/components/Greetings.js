import { useState } from "react";

const Greetings = () => {
  const [changedText, setChangedText] = useState(false);

  const clickHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h2>Hello World</h2>
      {!changedText && <p>its good to see you.</p>}
      {changedText && <p>changed</p>}
      <button onClick={clickHandler}>change text</button>
    </div>
  );
};
export default Greetings;
