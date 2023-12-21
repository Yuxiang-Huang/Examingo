import { Routes, Route } from "react-router";
import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
    </Routes>
  );
}

export default App;
