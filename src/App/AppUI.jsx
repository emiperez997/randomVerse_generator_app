import { useContext } from "react";
import { GeneratorButton } from "../GeneratorButton/GeneratorButton";
import { VerseInfo } from "../VerseInfo/VerseInfo";
import { VerseText } from "../VerseText/VerseText";
import "./App.css";
import { VerseContext } from "../VerseContext/VerseContext";

function AppUI() {
  const { loading, error } = useContext(VerseContext);

  return (
    <section className="container">
      {error ? (
        <p className="error-message">There was an error. Please try again.</p>
      ) : loading ? (
        <div className="loading">
          <p className="loading-text">
            <span>
              <span className="loading-dot"></span>
              <span className="loading-dot"></span>
              <span className="loading-dot"></span>
            </span>
          </p>
        </div>
      ) : (
        <>
          <VerseInfo />
          <VerseText />
          <GeneratorButton />
        </>
      )}
    </section>
  );
}

export default AppUI;
