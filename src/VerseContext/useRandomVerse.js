import { useEffect, useState } from "react";
import { getRandomVerse } from "./getRandomVerse";
// import { getRandomVerse } from "./getRandomVerse";

function useRandomVerse() {
  const [verse, setVerse] = useState("");
  const [verseInfo, setVerseInfo] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getRandomVerse()
      .then((data) => {
        setVerse(data.verse);
        setVerseInfo(data.verseInfo);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }, []);

  return {
    loading,
    error,
    verse,
    verseInfo,
    setVerse,
    setVerseInfo,
    setLoading,
  };
}

export { useRandomVerse };
