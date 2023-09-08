import { Box } from "@mui/system";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { Link } from "@mui/material";

export default function Login() {
  const navigate = useNavigate();
  const info = () => {
    const username = document.getElementById("name").value;
    const password = document.getElementById("pass").value;
    if (username !== null && username.trim() !== "") {
      if (password !== null && password.trim() !== "") {
        sessionStorage.setItem("name", username);
        sessionStorage.setItem("password", password);
        navigate("/Header/PRODUCTS");
      } else {
        alert("please enter password ");
      }
    } else {
      alert("please enter username ");
    }
    // // console.log(username);
    // sessionStorage.setItem("name", username);
    // sessionStorage.setItem("password", password);
    // console.log(sessionStorage.getItem("name") === true);
  };
  return (
    <>
      <h1 className="h1">Login</h1>
      <Box className="box">
        <Box className="box1">
          <Box className="box2">
            <input
              type="text"
              placeholder="enter name"
              className="name"
              id="name"
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="enter password"
              className="pass"
              id="pass"
            />
            <br /> <br />
            <button onClick={info} className="btn">
              Login
            </button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
