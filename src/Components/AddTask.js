import {
  Checkbox,
  Container,
  Dialog,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import dayjs from "dayjs";

function AddTask({ forAddTask, OpenTask }) {
  const [dateWithInitialValue, setDateWithInitialValue] = useState(
    dayjs("2019-01-01T18:54")
  );

  return (
    <Dialog open={OpenTask} onClose={forAddTask}>
      <Container className="p-4">
        <Typography className="p-4 uppercase" textAlign="center" variant="h5">
          Add task
        </Typography>

        <TextField
          id="standard-basic"
          label="Tittle"
          variant="standard"
          className="w-full"
        />
        <TextField
          id="standard-basic"
          label="Description"
          variant="standard"
          className="w-full"
          sx={{ mt: 3 }}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDateTimePicker
            value={dateWithInitialValue}
            onChange={(newValue) => {
              setDateWithInitialValue(newValue);
            }}
            label="With error handler"
            onError={console.log}
            minDate={dayjs("2018-01-01T00:00")}
            inputFormat="YYYY/MM/DD hh:mm a"
            mask="____/__/__ __:__ _M"
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Select time"
                className="w-full"
                sx={{ mt: 3 }}
              />
            )}
          />
        </LocalizationProvider>

        <FormGroup className="pt-3">
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Mark as Important"
          />
          <FormControlLabel control={<Checkbox />} label="Mark as Completed" />
        </FormGroup>
      </Container>
    </Dialog>
  );
}

export default AddTask;
