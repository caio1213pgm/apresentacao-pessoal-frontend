/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function WriteText(props) {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  function write(text, i = 0) {
    if (i < text.length) {
      setText(text.slice(0, i + 1));
      setTimeout(() => {
        write(text, i + 1);
      }, 300);
    }
  }
  useEffect(() => {
    setTimeout(() => write(props.text));
    setTimeout(() => setText2(props.text2), 4000);
    setTimeout(() => setText3(props.text3), 4500);
  }, []);
  return (
    <div className=" text-center">
      <h1 className="text-white text-5xl md:text-7xl font-semibold">{text}</h1>
      <p className="text-4xl md:text-4xl text-gray-300">{text2}</p>
      <p className="text-xl text-gray-400">{text3}</p>
    </div>
  );
}

export default WriteText;
