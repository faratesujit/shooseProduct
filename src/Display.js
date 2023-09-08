import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Display = () => {
  const changePass = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const Cpassword = document.getElementById("Cpassword").value;

    console.log(email, password, Cpassword);

    var data = JSON.stringify({
      email: email,
      password: password,
      confirm_password: Cpassword,
    });

    var config = {
      method: "post",
      url: "http://192.168.0.132:4000/api/v1/changepassword",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        if (response.data.status == true) {
          Swal.fire({
            title: "success!",
            text: response.data.message,
            icon: "success",
            confirmButtonText: "Cool",
          });
        } else {
          Swal.fire({
            title: "error",
            text: response.data.message,
            icon: "error",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Box>
        <TextField label="email" id="email" />
        <TextField label="New password" id="password" />
        <TextField label="confirm password" id="Cpassword" />
        <Button variant="contained" onClick={changePass}>
          submit
        </Button>
      </Box>
    </>
  );
};

export default Display;
