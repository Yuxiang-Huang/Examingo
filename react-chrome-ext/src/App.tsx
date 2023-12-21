import { Routes, Route } from "react-router";
import HomePage from "./components/HomePage";
import QuestionType from "./components/QuestionType";
import AnswerQuesion from "./components/AnswerQuesion";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/QuestionType" element={<QuestionType />} />
      <Route path="/AnswerQuesion" element={<AnswerQuesion />} />
    </Routes>
  );
}

export default App;
