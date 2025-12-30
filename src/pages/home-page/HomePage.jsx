import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import SearchBar from "../../components/search-bar/SearchBar";
import "./HomePage.scss";
import { apiRequest } from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const {updateUser, currentUser} = useContext(AuthContext);
  console.log("CURRENT USER", currentUser);
  const handleLogout = async () => {
    await apiRequest.post("/auth/logout");
    updateUser(null);
    navigate("/login");
  };
  
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <div className="logout">
            <button onClick={handleLogout}>Logout</button>
          </div>
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            explicabo suscipit cum eius, iure est nulla animi consequatur
            facilis id pariatur fugit quos laudantium temporibus dolor ea
            repellat provident impedit!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
