/* eslint-disable no-unused-vars */
import { useState } from "react";
import Button from "./Button";

export default function RandomColorGenerator() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#fff");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleGenerateHex() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
    console.log(hexColor);
  }

  function handleGenerateRgb() {
    let r = randomColorUtility(256);
    let g = randomColorUtility(256);
    let b = randomColorUtility(256);

    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    setColor(rgbColor);
    console.log(rgbColor);
  }

  function handleGenerateColor() {
    if (typeOfColor === "hex") {
      handleGenerateHex();
    } else {
      handleGenerateRgb();
    }
  }

  return (
    <>
      <h1>Random Color Generator</h1>
      <div
        style={{
          width: "50vw",
          height: "50vh",
          background: color,
          borderRadius: "20px",
        }}
      ></div>
      <h4>Genereated Color: {color}</h4>
      <Button onClick={() => setTypeOfColor("hex")}>Generate HEX</Button>
      <Button onClick={() => setTypeOfColor("rgb")}>Generate RGB</Button>
      <Button onClick={handleGenerateColor}>Generate Random Color</Button>
      <p>Click Hex or RGB button to chnge the type at any time.</p>
    </>
  );
}
