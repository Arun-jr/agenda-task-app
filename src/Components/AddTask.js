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
import { useTheme } from "@emotion/react";
import { lightBlue } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function AddTask({ forAddTask, OpenTask }) {
  const materialTheme = createTheme({
    overrides: {
      MuiPickersToolbar: {
        root: {
          backgroundColor: lightBlue.A200,
        },
      },
      MuiPickersCalendarHeader: {
        root: {
          // backgroundColor: lightBlue.A200,
          // color: "white",
        },
      },
      MuiPickersDay: {
        root: {
          color: lightBlue.A700,
          "&$disabled": {
            color: lightBlue["100"],
          },
          "&$selected": {
            backgroundColor: lightBlue["400"],
          },
        },
        today: {
          color: lightBlue["900"],
        },
      },
      MuiPickersModalDialog: {
        dialogAction: {
          color: lightBlue["400"],
        },
      },
    },
  });

  const theme = useTheme();
  const [dateWithInitialValue, setDateWithInitialValue] = useState(
    dayjs("2019-01-01T18:54")
  );
  const color = "white";
  return (
    <Dialog open={OpenTask} onClose={forAddTask}>
      <Container
        className="p-4"
        sx={
          theme.palette.mode === "dark"
            ? { color: "white" }
            : { color: "white" }
        }
      >
        <Typography className=" uppercase" textAlign="center" variant="h5">
          Add task
        </Typography>

        <TextField
          id="Tittle-basic"
          label="Tittle"
          variant="standard"
          className="w-full"
          margin="dense"
          color="primary"
          sx={{
            input: { color },
            label: { color },
          }}
        />
        <TextField
          id="Description"
          label="Description"
          variant="standard"
          className="w-full"
          margin="dense"
          color="primary"
          sx={{
            input: { color },
            label: { color },
          }}
        />
        <ThemeProvider theme={materialTheme}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDateTimePicker
              value={dateWithInitialValue}
              onChange={(newValue) => {
                setDateWithInitialValue(newValue);
              }}
              sx={{
                svg: { color },
                input: { color },
                label: { color },
              }}
              onError={console.log}
              minDate={dayjs("2018-01-01T00:00")}
              inputFormat="YYYY/MM/DD hh:mm a"
              mask="____/__/__ __:__ _M"
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Select time"
                  className="w-full "
                  margin="dense"
                  focused
                  sx={{
                    svg: { color },
                    input: { color },
                    label: { color },
                  }}
                />
              )}
            />
          </LocalizationProvider>
        </ThemeProvider>
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
