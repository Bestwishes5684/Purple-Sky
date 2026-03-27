import "./App.css";
import Character from "./Components/CharacterFolder/Character";
import Main from "./Components/MainFolder/Main";
import Header from "./Components/HeaderFolder/Header";
import ListCharacter from "./Components/ListCharacterFolder/ListCharacter";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header /> {/* пока оставляем как есть, потом переделаем */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/character" element={<Character />} />
        <Route path="/ListCharacter" element={<ListCharacter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
