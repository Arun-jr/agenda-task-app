import React from "react";
import { Container, Typography } from "@mui/material";

function UnCompletedTask() {
  return (
    <Container>
      <Typography
        sx={{
          my: 2,
          alignItems: "end",
          justifyContent: "center",
          textAlign: { xs: "start", lg: "center" },
          fontSize: { xs: 20, lg: 25 },
        }}
      >
        UnCompletedTask
      </Typography>
    </Container>
  );
}

export default UnCompletedTask;
