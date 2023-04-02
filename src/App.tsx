import { useState } from "react";
import LanguageContext from "./hooks/languageContext";
import { Routes } from "./routes/routes";

function App() {
  const [language, setLanguage] = useState<string[]>([]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Routes />
    </LanguageContext.Provider>
  );
}

export default App;
