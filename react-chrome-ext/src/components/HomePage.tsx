import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const goToPage1 = () => {
    navigate("/Page1");
  };

  const goToPage2 = () => {
    navigate("/Page2");
  };

  return (
    <div>
      <div>HomePage</div>
      <button onClick={goToPage1}>Page 1</button>
      <button onClick={goToPage2}>Page 2</button>
    </div>
  );
};

export default HomePage;
