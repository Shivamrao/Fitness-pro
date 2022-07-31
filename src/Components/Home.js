import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
// import Nutrtion from './Nutrtion'
function Home() {
  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://www.wallpaperup.com/uploads/wallpapers/2014/10/07/473965/3a0d9ffac238cacff4e9dd8dc9b35345.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="Navbar">
        <Link to="/">
          <button className="button">Home</button>
        </Link>
        <Link to="/calculator">
          <button className="button">Calculator</button>
        </Link>
        <Link to="/bmi">
          <button className="button">BMI</button>
        </Link>
        <Link to="/blogs">
          <button className="button">Blogs</button>
        </Link>
        <Link to="/about">
          <button className="button">About</button>
        </Link>
      </div>
      <div className="heading">
        <div className="Text1">
          Transform to your best shape with Fitness-Pro
        </div>

        <div className="textsmall">Building Blocks of perfect Health</div>

        <div className="container1">
          <div
            className="container2"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url("https://www.pennmedicine.org/cancer/-/media/images/miscellaneous/food%20and%20drink/fruits_vegetables_in_shopping_bag.ashx?mw=376&bc=f4f4f4")`,
              backgroundPosition: "center center",
            }}
          >
            <div className="Text">Nutrition</div>
          </div>
          <div className=""></div>

          <div
            className="container2"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url("https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
              backgroundPosition: "center center",
            }}
          >
            <div className="Text"> Training</div>
          </div>
          <div className=""></div>

          <div
            className="container2"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url("https://www.ishn.com/ext/resources/Issues/2018/04-April/ISHN0418_F4_pic.jpg?1522684599")`,
              backgroundPosition: "center center",
            }}
          >
            <div className="Text2"> Sleep & Hydration</div>
          </div>
          <div> </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
