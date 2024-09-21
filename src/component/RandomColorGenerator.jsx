/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Button from "./Button";

export default function RandomColorGenerator() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#fff");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return window.removeEventListener("resize", handleResize);
  }, []);

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

  const mainDivStyle = {
    width: windowWidth < 768 ? "90vw" : "50vw",
    height: windowWidth < 768 ? "30vh" : "50vh",
    background: color,
    borderRadius: "20px",
    margin: "20px auto",
    transition: "all 0.3s ease",
  };

  return (
    <>
      <h1>Random Color Generator</h1>
      <div style={mainDivStyle}></div>
      <h4>Genereated Color: {color}</h4>
      <Button onClick={() => setTypeOfColor("hex")}>Generate HEX</Button>
      <Button onClick={() => setTypeOfColor("rgb")}>Generate RGB</Button>
      <Button onClick={handleGenerateColor}>Generate Random Color</Button>
      <p>Click Hex or RGB button to chnge the type at any time.</p>
    </>
  );
}
