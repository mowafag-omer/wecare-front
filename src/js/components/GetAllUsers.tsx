import React, { useEffect, useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { user, users } from "../utils/types/user";
import api from "../utils/api";
import { useSelector } from "react-redux";
import { addAuth } from "../utils/api";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ResponsiveGrid: React.FC = () => {
  // const [users, setUsers] = useState([]);

  const userState = useSelector((state) => state);
  console.log("userState", userState);

  useEffect(() => {
    let axiosResponse = "";
    // const AuthStr = 'Bearer '.concat(USER_TOKEN);
    // const AuthStr2 = 'Bearer '.concat("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzgsI…0ODR9.SBHloEsLNW2mlZkDGPd47TaALcX_9AvZKdBJoSUO6_k");
    // const AuthStr3 = 'Bearer '+ "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzgsI…2MDd9.HLEPSDRQ2mWo1UNAdgDD6wwqeryLSS8vEDA0wZ_3AlI"
    const AuthStr4 =
      "Bearer " +
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJqb2huQGV4ZW1wbGUuY29tIiwiaWF0IjoxNjQ0ODQ2NDM0LCJleHAiOjE2NDQ5MzI4MzR9.7L7Q96aAoUWkyjXImbkjF7idDPE2DPGjPgSKN_ABWg4";

    const apiCall = async () => {
      console.log("apiCall in useEffect");
      // await api.get("/users/allUsers", {})
      // addAuth()
      await api.get("/users/allUsers", {
        headers: { Authorization: AuthStr4 },
      });

      console.log("axiosResponse 1 to get all users:", axiosResponse);
      console.log("user 2 to get all users:", Response);
    };

    // apiCall();
    // console.log("axiosResponse 2 to get all users:", axiosResponse);
    // console.log("user 2 to get all users:", Response);

    // setUsers(axiosResponse.data);
  }, []);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(3)).map((element, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>
                <Avatar
                  sx={{ m: 1, bgcolor: "primary.main" }}
                  src="/broken-image.jpg"
                />
                <Typography component="h1" variant="h5">
                  Sign
                </Typography>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default ResponsiveGrid;
