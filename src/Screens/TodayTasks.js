import { Container, Typography } from "@mui/material";
import React from "react";

function TodayTask() {
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
       TodayTask
        </Typography>
    </Container>
  );
}

export default TodayTask;
