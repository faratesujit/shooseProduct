import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
  Drawer,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  List,
  Divider,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";
import Drawercomp from "./Drawercomp";

import DrawBtn from "./DrawerBtn";
import { NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Products from "./Product";

function Header(props) {
  const navigate = useNavigate();
  const [active, setactive] = useState();
  // const changeState = (newvalue) => {
  //   console.log("click on tab", newvalue);
  //   setValue(newvalue);
  // };
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const tabs = ["PRODUCTS", "SERVICES", "CONTACTUS", "ABOUTUS"];
  const Logout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  const handleTabChange = (event, newvalue) => {
    console.log("click on tab", newvalue);
    setactive(newvalue);
  };

  return (
    <div>
      <AppBar sx={{ backgroundColor: "#063970" }} position="static">
        <Toolbar>
          <NavLink
            to={"/Header/" + "Added_item"}
            style={{ color: "white", textDecoration: "" }}
          >
            <div>
              <span>
                <ShoppingCartOutlinedIcon />
              </span>
              <span>{0}</span>
            </div>
          </NavLink>
          {/* <AddShoppingCartIcon /> */}
          {isMatch ? (
            <Typography>
              <Drawercomp />
              <DrawBtn />
            </Typography>
          ) : (
            <>
              <Tabs
                value={active}
                // onClick={handleTabChange}

                onChange={handleTabChange}
                indicatorColor="secondary"
              >
                {tabs.map((value, index) => {
                  return (
                    <>
                      <NavLink
                        to={"/Header/" + value}
                        style={{ color: "white" }}
                      >
                        <Tab key={index} label={value} />
                      </NavLink>
                    </>
                  );
                })}
              </Tabs>
              {/* <Button variant="contained" sx={{ marginLeft: "auto" }}>
                LOG OUT
              </Button> */}
            </>
          )}
          <Typography sx={{ marginLeft: "auto", marginRight: "50px" }}>
            Welcome To {":)" + " " + sessionStorage.getItem("name")}
          </Typography>
          {isMatch ? (
            <DrawBtn />
          ) : (
            <Button
              variant="contained"
              onClick={Logout}
              sx={{ marginLeft: "10px" }}
            >
              LOG OUT
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Outlet />
    </div>
  );
}

export default Header;
