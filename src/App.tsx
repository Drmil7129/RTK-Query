import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CommentSection from "./CommentSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CommentSection></CommentSection>
    </div>
  );
}

export default App;
