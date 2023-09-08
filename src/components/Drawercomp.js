import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "react-router-dom";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

function Drawercomp() {
  const [state, setState] = useState(false);
  const [btn, setBtn] = useState(false);
  const tabs = ["PRODUCTS", "SERVICES", "CONTACTUS", "ABOUTUS"];
  return (
    <>
      <Drawer
        open={state}
        onClick={() => {
          setState(false);
        }}
        // style={{ backgroundColor: "#063970" }}
      >
        <div style={{ backgroundColor: "#063970" }}>
          <List>
            {tabs.map((value, index) => (
              <ListItemButton>
                <ListItemIcon>
                  <NavLink
                    to={"/Header/" + value}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <ListItemText
                      sx={{ color: "white", marginLeft: "10px" }}
                      key={index}
                    >
                      {value}
                      <ListItemIcon>
                        {index == 0 ? (
                          <PermContactCalendarIcon sx={{ color: "white" }} />
                        ) : null}
                      </ListItemIcon>
                    </ListItemText>

                    {/* {{switch(index){
                    case 0:return <PermContactCalendarIcon/>
                    case 1:return <PermContactCalendarIcon/>
                    case 2:return <PermContactCalendarIcon/>
                    case 3:return <PermContactCalendarIcon/>

                  }} } */}
                  </NavLink>
                </ListItemIcon>
              </ListItemButton>
            ))}
          </List>
        </div>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => {
          setState(true);
        }}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default Drawercomp;
