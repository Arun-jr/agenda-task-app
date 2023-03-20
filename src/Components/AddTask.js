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
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
// import { useTheme } from "@emotion/react";
// import { lightBlue } from "@mui/material/colors";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { getCurrentDate } from "./CurrentDate";

function AddTask({ forAddTask, OpenTask }) {

  // const materialTheme = createTheme({
  //   overrides: {
  //     MuiPickersToolbar: {
  //       root: {
  //         backgroundColor: lightBlue.A200,
  //       },
  //     },
  //     MuiPickersCalendarHeader: {
  //       root: {
  //         // backgroundColor: lightBlue.A200,
  //         // color: "white",
  //       },
  //     },
  //     MuiPickersDay: {
  //       root: {
  //         color: lightBlue.A700,
  //         "&$disabled": {
  //           color: lightBlue["100"],
  //         },
  //         "&$selected": {
  //           backgroundColor: lightBlue["400"],
  //         },
  //       },
  //       today: {
  //         color: lightBlue["900"],
  //       },
  //     },
  //     MuiPickersModalDialog: {
  //       dialogAction: {
  //         color: lightBlue["400"],
  //       },
  //     },
  //   },
  // });

  // const theme = useTheme();

  const [dateWithInitialValue, setDateWithInitialValue] = useState(
    dayjs(getCurrentDate())
  );

  // const color = "white";
  
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [addTask, setAddTask] = useState(JSON.parse(localStorage.getItem("addTask")) || []);

  useEffect(() => {
    localStorage.setItem("addTask", JSON.stringify(addTask));
    if(addTask){
      addTask.forEach((item, i) => {
        item.id = i + 1;
      });
    }
  }, [addTask]);

  const OnSubmit = (data) => {

    // const formData = new FormData()

    // Object.assign(data);
    // formData.append("title", data.title);
    // formData.append("description", data.description);
    // formData.append("date", data.date);
    // formData.append("important", data.important);
    // formData.append("completed", data.completed);

    


    if (addTask?.length) {
      const items = JSON.parse(localStorage.getItem("addTask"))
      items.push(data)
      setAddTask(items)
    } else {
      setAddTask([data]);
    }
    forAddTask();
    reset();
  };

  console.log(addTask, "addTask");

  return (
    <Dialog open={OpenTask} onClose={forAddTask}>
      <Container
        className="p-4"
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
           
          />
         
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={dateWithInitialValue}
                onChange={(newValue) => {
                  setDateWithInitialValue(newValue);
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
                  
                  />
                )}
              />
            </LocalizationProvider>
         
          <FormGroup className="pt-3">
            <FormControlLabel
              control={<Checkbox  aria-invalid={errors.description ? "true" : "false"}
              {...register("important")}/>}
              label="Mark as Important"
            />
            <FormControlLabel sx={{mb : 2}}
              control={<Checkbox  aria-invalid={errors.description ? "true" : "false"}
              {...register("completed")}/>}
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
