import React from "react";
import "./App.css";
import Title from "./components/title";
import UploadImage from "./components/upload";
import ImageGrid from "./components/imageGrid";

function App() {
  return (
    <div className="App">
      <Title />
      <UploadImage />
      <ImageGrid />
    </div>
  );
}

export default App;
