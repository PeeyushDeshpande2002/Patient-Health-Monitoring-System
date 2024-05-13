import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useFirebase } from "../../firebase";
import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const firebase = useFirebase();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await firebase.loginUser(
        email,
        password
      );
     navigate('/dashboard')
    } catch (error) {
      console.log(error);
    }
  
  };

  return (
    <>
      <Box display={"flex"} justifyContent={"center"} alignItems="center">
        <h1>Login Now !!!!</h1>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        //alignItems="center"
        minHeight="50vh"
      >
        <div>
          <TextField
            label="Enter the email addres"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            // InputProps={{
            //   startAdornment: <InputAdornment position="start"></InputAdornment>,
            // }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <br />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>

            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <br />
            <Button variant="contained" color="success" onClick={handleSubmit}>
              Login
            </Button>
          </FormControl>
        
          <br/>
          <a href="/signup">Register Now!</a>
        </div>
      </Box>
    </>
  );
}
