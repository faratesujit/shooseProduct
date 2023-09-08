import { Remove } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

// const [demo, setDemo] = useState("");
export default function Added_item(props) {
  // console.log(props.array);
  const [demo, setDemo] = useState([]);

  // const info = [];
  // useEffect(() => {
  //   console.log("demoUseEffectCalled");
  // }, [demo]);

  function Remove(id) {
    // console.log("removeId------->", id);
    // demo.find((item) => {
    // console.log("item-------->", item);
    // if (item.id != id) {
    // info.push(item);
    // const itemToBeRemoved = { id: 1, name: "sahil" };
    const findIndex = props.array.findIndex((a) => a.id === id);
    findIndex !== -1 && props.array.splice(findIndex, 1);
    // props.array.push(item);
    console.log("props.array ---------->", props.array);
    // });
    // });
    // console.log("info==>", info);
    // console.log("demo1------->", demo);
    setDemo(props.array);
    // console.log("demo2------->", demo);
    // setDemo(props.array);

    localStorage.setItem("details", JSON.stringify(props.array));
    // if there
    // if (info.length == 0) {
    //   localStorage.clear();
    // }
  }

  // console.log("demo-------->", demo);

  useEffect(() => {
    //   console.log("USEEFFECTCALLED");
    if (localStorage.getItem("details")) {
      setDemo(JSON.parse(localStorage.getItem("details")));

      //   console.log(demo);
    }
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Added_items </h1>
      {/* <Grid container spacing={2}> */}
      {demo &&
        demo.map((course) => (
          <List
            sx={{
              width: "100%",
              border: "1px solid black",
              borderRadius: "6px",
              bgcolor: "background.paper",
              marginTop: "1px",
            }}
          >
            <ListItem>
              <ListItemText primary={course.type} />
              <ListItemAvatar>
                <Avatar alt="img" src={course.image} />
              </ListItemAvatar>
              <ListItemText
                primary={course.price}
                sx={{
                  marginLeft: "100px",
                  maxWidth: 500,
                  fontweight: "600",
                }}
              />
              <ListItemButton
                sx={{
                  border: "1px solid black",
                  borderRadius: "6px",
                  maxWidth: 100,
                  // width: 100,
                }}
                onClick={() => {
                  Remove(course.id);
                }}
              >
                Remove
              </ListItemButton>
            </ListItem>
          </List>
          // <Grid item xs={6} sm={4} md={4}>
          //   <Card sx={{ maxWidth: "300px" }}>
          //     <Box sx={{ textAlign: "center" }}>
          //       <CardMedia
          //         component="img"
          //         height="200px"
          //         image={course.image}
          //         alt="shoes"
          //       />
          //       <CardContent>
          //         <Typography>This is {course.type}</Typography>
          //         <Typography variant="h6" sx={{ fontWeight: "600" }}>
          //           {course.price}
          //         </Typography>
          //       </CardContent>

          //       <CardActions>
          //         <Button
          //           onClick={() => {
          //             Remove(course.id);
          //           }}
          //           variant="contained"
          //           style={{ margin: "auto" }}
          //         >
          //           Remove
          //         </Button>
          //         <Button
          //           // onClick={}
          //           variant="contained"
          //           style={{ margin: "auto" }}
          //         >
          //           Add
          //         </Button>
          //       </CardActions>
          //     </Box>
          //   </Card>
          // </Grid>
        ))}
      {/* </Grid> */}
    </>
  );
}
