import { createContext } from "react";
import PropTypes from "prop-types";
import { useRandomVerse } from "./useRandomVerse";

const VerseContext = createContext();

function VerseProvider({ children }) {
  const {
    verse,
    verseInfo,
    loading,
    error,
    setVerse,
    setVerseInfo,
    setLoading,
  } = useRandomVerse();

  return (
    <VerseContext.Provider
      value={{
        verse,
        verseInfo,
        loading,
        error,
        setVerse,
        setVerseInfo,
        setLoading,
      }}
    >
      {children}
    </VerseContext.Provider>
  );
}

export { VerseContext, VerseProvider };

VerseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
