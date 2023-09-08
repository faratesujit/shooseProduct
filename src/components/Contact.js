import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";
export default function Contact() {
  const [empDetail, setEmpDetail] = useState([]);
  const get = () => {
    var formdata = new FormData();
    formdata.append(
      "token",
      "onZ0OfdDdn7W1/c2hYRvUx+gsN3jrS+OlaZf/oF9xY04gNG0iYzdfR0n3CQhBNvm"
    );
    formdata.append("userid", "vckApJOu6y27zpzZ/TVWvg==");
    formdata.append("status", "VkgHfxQG+S/+QKMK5kELPA==");

    var requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // body: formdata,
      redirect: "follow",
    };

    fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const data = JSON.parse(result);
        console.log("data===>,", data);
        setEmpDetail(data);
      })
      .catch((error) => console.log("error", error));
  };

  const ToknowWhichId = (id, name) => {
    console.log("click on id", id, "whose name is", name);
  };

  return (
    <>
      <h1>Contact page</h1>
      <Button variant="contained" onClick={get}>
        get employee
      </Button>
      {/* <List>
        {empDetail.map((item) => {
          <ListItem>
            <ListItemText>{item.name}</ListItemText>
            {console.log("empDetail++++>", item.name)}
          </ListItem>;
        })}
        
      </List> */}
      <List>
        {empDetail.map((item) => (
          <>
            <span>
              <ListItemButton onClick={() => ToknowWhichId(item.id, item.name)}>
                <ListItem>
                  <ListItemText>{item.name}</ListItemText>
                </ListItem>
              </ListItemButton>
              <Divider />
            </span>
          </>
          // <div key={item.id}>
          //   <h3>{item.name}</h3>
          // </div>
        ))}
      </List>
    </>
  );
}
