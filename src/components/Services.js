import { Button, List, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";
export default function Service(props) {
  // let employee = [];
  // const [data, setData] = useState([0]);

  // var formdata = new FormData();
  // formdata.append(
  //   "token",
  //   "onZ0OfdDdn7W1/c2hYRvUx+gsN3jrS+OlaZf/oF9xY04gNG0iYzdfR0n3CQhBNvm"
  // );
  // formdata.append("userid", "vckApJOu6y27zpzZ/TVWvg==");
  // formdata.append("status", "VkgHfxQG+S/+QKMK5kELPA==");

  // var requestOptions = {
  //   method: "GET",

  //   redirect: "follow",
  // };

  // fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
  //   .then((response) => response.text())
  //   .then((result) => {
  //     var data = JSON.parse(result);
  //     let val;
  //     data.map((item) => {
  //       // console.log("item====>", item.name);

  //       // console.log("localval====>", sessionStorage.getItem("name"));
  //       if (item.name == sessionStorage.getItem("name")) {
  //         val = JSON.stringify(item);
  //         employee.push(val);

  //         return;
  //       } else {
  //         // console.log("in else");
  //         return;
  //       }
  //     });
  //     setData(employee);
  //   })
  //   .catch((error) => console.log("error", error));

  return (
    <>
      <h1>Service page</h1>

      {/* <List>
        <ListItem>
          <ListItemText>{data}</ListItemText>
        </ListItem>
      </List> */}
    </>
  );
}
