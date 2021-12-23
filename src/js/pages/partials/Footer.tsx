import React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <div>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ mt: 5 }} 
      >
        {"Copyright © "}
        <Link color="inherit" href="https://github.com/mowafag-omer/wecare-front">
          WeCare
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
};

export default Footer;
