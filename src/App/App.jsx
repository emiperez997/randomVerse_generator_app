import { VerseProvider } from "../VerseContext/VerseContext";
import AppUI from "./AppUI";

function App() {
  return (
    <VerseProvider>
      <AppUI />
    </VerseProvider>
  );
}

export default App;
