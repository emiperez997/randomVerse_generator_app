import { useContext } from "react";
import "./VerseInfo.css";
import { VerseContext } from "../VerseContext/VerseContext";

function VerseInfo() {
  const { verseInfo } = useContext(VerseContext);

  return <p className="verse-info">{verseInfo}</p>;
}

export { VerseInfo };
