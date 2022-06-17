import { useEffect, useState, useSyncExternalStore } from "react";
import "./App.css";
import getRandomQuote from "./functions/getRandomQuote";

function App() {
  const [quote, setQuote] = useState(
    "The be or not to be. That is the question. -Prince Hamlet of Denmark"
  );

  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Inspire Me</h1>
      <p style={{ maxWidth: "60vw" }}>{quote}</p>
      <button onClick={() => setQuote(getRandomQuote())}>New Quote</button>
    </div>
  );
}

export default App;
