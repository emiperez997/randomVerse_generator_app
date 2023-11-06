import { useContext } from "react";
import "./GeneratorButton.css";
import { VerseContext } from "../VerseContext/VerseContext";
import { getRandomVerse } from "../VerseContext/getRandomVerse";

function GeneratorButton() {
  const { setVerse, setVerseInfo, setLoading } = useContext(VerseContext);

  const generateVerse = () => {
    setLoading(true);
    getRandomVerse()
      .then((response) => {
        setVerse(response.verse);
        setVerseInfo(response.verseInfo);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className="generator-container">
      <button onClick={generateVerse} className="generator-button">
        Generate Verse
      </button>
    </div>
  );
}

export { GeneratorButton };
