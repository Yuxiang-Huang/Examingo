import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import QuestionType from "./pages/QuestionType";
import ResolveQuestion from "./pages/ResolveQuesion";
// import "./App.css";
import FreeResponse from "./pages/FreeResponse";
import MultipleChoice from "./pages/MultipleChoice";

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
