import React, { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import Clicker from "./components/Clicker";
export default function App() {
  const [titleValue] = useState("Clicker");
  return (
    <div className="App">
      <Header title={titleValue} />
      <Clicker />
    </div>
  );
}
