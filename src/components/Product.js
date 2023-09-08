import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Swal from "sweetalert2";
// const array = [];
let details;
export default function Products(props) {
  console.log("props.array===>", props.array);
  // // const [value, setValue] = useState(0);
  // console.log("array===>", array);
  const data = [
    { id: 1, image: "/shoes.png", type: "canvas shoes", price: "$500" },
    { id: 2, image: "/shoes1.jpg", type: "jogers shoes", price: "$600" },
    { id: 3, image: "/shoes2.jpg", type: "gum shoes", price: "$100" },
    { id: 4, image: "/shoes.png", type: "canvas shoes", price: "$500" },
    { id: 5, image: "/shoes1.jpg", type: "jogers shoes", price: "$600" },
    { id: 6, image: "/shoes2.jpg", type: "gum shoes", price: "$100" },
  ];

  function buy_product(id) {
    details = data.find((obj) => obj.id == id);

    if (props.array.includes(details)) {
      alert("item alredy Added");
    } else {
      props.array.push(details);
    }
    console.log("props.array===>", props.array);
    console.log("check value is in array", props.array.includes(details));
    // array.find((item)=>{
    //  if(item.id==details) {}
    // })

    // console.log("array===>", array)
    localStorage.setItem("details", JSON.stringify(props.array));

    Swal.fire({
      title: "Success",
      text: "Item  Added  successfully",
      icon: "success",
      confirmButtonText: "OK",
    });
  }

  const arrayDataItems = data.map((course) => (
    <>
      <Grid item xs={6} sm={3} md={2}>
        <Card sx={{ maxWidth: "300px" }}>
          <Box sx={{ textAlign: "center" }}>
            <CardMedia
              component="img"
              height="200px"
              image={course.image}
              alt="shoes"
            />
            <CardContent>
              <Typography sx={{ fontWeight: "600" }}>
                This is {course.type}
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: "600" }}>
                {course.price}
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                onClick={() => {
                  buy_product(course.id);
                }}
                variant="contained"
                style={{ margin: "auto" }}
              >
                Add To Cart
              </Button>
            </CardActions>
          </Box>
        </Card>
      </Grid>
    </>
  ));
  return (
    <>
      <Grid container spacing={2}>
        {arrayDataItems}
      </Grid>
    </>
  );
}
