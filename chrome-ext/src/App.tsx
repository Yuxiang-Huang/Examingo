import { Routes, Route } from "react-router";
import HomePage from "./components/pages/HomePage";
import QuestionType from "./components/pages/QuestionType";
import ResolveQuestion from "./components/pages/ResolveQuestion";
// import "./App.css";
import FreeResponse from "./components/pages/FreeResponse";
import MultipleChoice from "./components/pages/MultipleChoice";
import LoginPage from "./components/Auth/LoginPage";
import SignUp from "./components/Auth/SignUpPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} index />
      <Route path="/QuestionType" element={<QuestionType />} />
      <Route path="/ResolveQuestion" element={<ResolveQuestion />} />
      <Route path="/FreeResponse" element={<FreeResponse />} />
      <Route path="/MultipleChoice" element={<MultipleChoice />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  );
}

export default App;
