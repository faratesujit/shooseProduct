import LogoutIcon from "@mui/icons-material/Logout";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function DrawBtn() {
  const navigate = useNavigate();
  const [openDraw, setOpenDraw] = useState(false);
  const arr = ["LOGOUT"];
  const Logout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <Drawer
        anchor="right"
        open={openDraw}
        onClick={() => {
          setOpenDraw(false);
        }}
      >
        <List sx={{ backgroundColor: "#063970" }}>
          {arr.map((value, index) => (
            <ListItemButton>
              <ListItemIcon>
                <ListItemText
                  sx={{ color: "white" }}
                  onClick={Logout}
                  key={index}
                >
                  {value}
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        style={{ position: "absolute", right: "5px", color: "white" }}
        onClick={() => {
          setOpenDraw(true);
        }}
      >
        <LogoutIcon />
      </IconButton>
    </>
  );
}
