import React from "react";
import { Container, Typography } from "@mui/material";

function ImportantTask() {
  return (
    <Container>
     <Typography
          
          sx={{
            my: 2,
            alignItems: "end",
            justifyContent: "center",
            textAlign: { xs: "start", lg: "center" },
            fontSize : { xs: 20, lg: 25 },
          }}
        >
         ImportantTask
        </Typography>
     
    </Container>
  );
}

export default ImportantTask;
