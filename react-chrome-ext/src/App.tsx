import { Routes, Route } from "react-router";
import HomePage from "./components/HomePage";
import QuestionType from "./components/QuestionType";
import ResolveQuestion from "./components/ResolveQuesion";
// import "./App.css";
import FreeResponse from "./components/FreeResponse";
import MultipleChoice from "./components/MultipleChoice";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} index />
      <Route path="/QuestionType" element={<QuestionType />} />
      <Route path="/ResolveQuestion" element={<ResolveQuestion />} />
      <Route path="/FreeResponse" element={<FreeResponse />} />
      <Route path="/MultipleChoice" element={<MultipleChoice />} />
    </Routes>
  );
}

export default App;
