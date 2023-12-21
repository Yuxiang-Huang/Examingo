import { useNavigate } from "react-router-dom";
import ExamingoLogo from './ExamingoLogo.png';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const goToPage1 = () => {
    navigate("/Page1");
  };

  const goToPage2 = () => {
    navigate("/Page2");
  };

  return (
    <div className="HomePage">
      <header className="Home-page-header">
      <img src={ExamingoLogo} className="Logo" alt="logo" />
      <div>HomePage</div>
      <button onClick={goToPage1}>Page 1</button>
      <button onClick={goToPage2}>Page 2</button>
      </header>
    </div>
  );
};

export default HomePage;
