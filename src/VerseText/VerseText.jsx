import { useContext } from "react";
import "./VerseText.css";
import { VerseContext } from "../VerseContext/VerseContext";

function VerseText() {
  const { verse } = useContext(VerseContext);

  return <p className="verse-text">{verse}</p>;
}

export { VerseText };
