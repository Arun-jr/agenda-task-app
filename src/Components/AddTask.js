import {
  Button,
  Checkbox,
  Container,
  Dialog,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import dayjs from "dayjs";
import { useTheme } from "@emotion/react";
import { lightBlue } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {getCurrentDate} from './CurrentDate'





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
    dayjs(getCurrentDate())
  );
  const color = "white";

  const {
    register,
    formState: { errors },
    handleSubmit,
   
  } = useForm();

  const OnSubmit = (data) => {
    console.log(data);
  };

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
        <form onSubmit={handleSubmit(OnSubmit)}>
          <TextField
            required
            id="Tittle-basic"
            label="Tittle"
            variant="standard"
            className="w-full"
            aria-invalid={errors.title ? "true" : "false"}
            {...register("title", { required: true })}
            margin="dense"
            color={errors?.title ? "error" : "primary"}
            sx={{
              input: { color },
              label: { color },
            }}
          />
          <TextField
            required
            id="Description"
            label="Description"
            variant="standard"
            className="w-full"
            aria-invalid={errors.description ? "true" : "false"}
            {...register("description", { required: true })}
            margin="dense"
            color={errors?.description ? "error" : "primary"}
            sx={{
              input: { color },
              label: { color },
            }}
          />
          <ThemeProvider theme={materialTheme}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={dateWithInitialValue}
                onChange={(newValue) => {
                  setDateWithInitialValue(newValue);
                }}
                sx={{
                  input: { color },
                  label: { color },
                  svg : {color},
                }}
                onError={console.log}
                minDate={dayjs("")}
                inputFormat="DD/MM/YYYY"
                mask="__/__/____"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    label="Select date"
                    className="w-full "
                    margin="dense"
                    aria-invalid={errors.date ? "true" : "false"}
                    {...register("date", { required: true })}
                   
                    sx={{
                      input: { color },
                      label: { color },
                      svg : {color},
                    }}
                  />
                )}
              />
            </LocalizationProvider>
          </ThemeProvider>

          {/* <ThemeProvider theme={materialTheme}>
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
                minDate={dayjs("")}
                inputFormat="DD/MM/YYYY hh:mm a"
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
          </ThemeProvider> */}
          <FormGroup className="pt-3">
            <FormControlLabel
              control={<Checkbox />}
              label="Mark as Important"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Mark as Completed"
            />
            <Button
              type="submit"
              variant="contained"
              size="large"
              title="Add new task"
              color="primary"
            >
              Add a task
            </Button>
          </FormGroup>
        </form>
      </Container>
    </Dialog>
  );
}

export default AddTask;
