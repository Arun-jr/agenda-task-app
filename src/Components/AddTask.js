import { Container, Dialog, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function AddTask({ forAddTask, OpenTask }) {
  return (
    <Dialog open={OpenTask} onClose={forAddTask}>
      <Container className="p-4">
        <Typography color={"white"} className="p-4">
          Add task
        </Typography>
        <TextField
          id="standard-basic"
          label="Tittle"
          variant="standard"
          className="w-full m-4"
        />
        <TextField
          id="standard-basic"
          label="Description"
          variant="standard"
          className="w-full"
        />
      </Container>
    </Dialog>
  );
}

export default AddTask;
