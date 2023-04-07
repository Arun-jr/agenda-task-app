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
import { useForm, Controller } from "react-hook-form";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { getCurrentDate } from "./CurrentDate";
import { useDispatch } from "react-redux";
import { AddTodo, EditTodo } from "../Reducers/todoReducer";

function AddTask({ forAddTask, OpenTask, task }) {
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

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    control,
    reset,
  } = useForm();

  const handleChange = (date) => {
    setDateWithInitialValue(date);
  };

  const dispatch = useDispatch();

  const OnSubmit = (data) => {
    if (data.id) {
      console.log("now editing...");
      dispatch(EditTodo(data));

      reset();
      const task = [];
      forAddTask();
      return task;
    }
    console.log("now adding...");
    dispatch(AddTodo(data));

    reset();
    forAddTask();
  };

  useEffect(() => {
    if (task) {
      setValue("title", task[0]?.title);
      setValue("description", task[0]?.description);
      setValue("date", task[0]?.date);
      setValue("important", task[0]?.important);
      setValue("completed", task[0]?.completed);
      setValue("id", task[0]?.id);
    }
  }, [task]);

  return (
    <Dialog open={OpenTask} onClose={forAddTask}>
      <Container className="p-4">
        <Typography className=" uppercase" textAlign="center" variant="h5">
          {task?.length ? "Edit task" : "Add task"}
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
              onChange={handleChange}
              onError={console.log}
              inputFormat="YYYY/MM/DD"
              mask="____/__/__"
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Select date"
                  className="w-full "
                  margin="dense"
                  aria-invalid={errors.date ? "true" : "false"}
                  {...register("date")}
                />
              )}
            />
          </LocalizationProvider>

          <FormGroup className="pt-3">
            <Controller
              control={control}
              name="important"
              render={({ field }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      aria-invalid={errors.important ? "true" : "false"}
                      {...field}
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                  }
                  label="Mark as Important"
                />
              )}
            />
            <Controller
              control={control}
              name="completed"
              render={({ field }) => (
                <FormControlLabel
                  sx={{ mb: 2 }}
                  control={
                    <Checkbox
                      {...field}
                      aria-invalid={errors.completed ? "true" : "false"}
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                  }
                  label="Mark as Completed"
                />
              )}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              title="Add new task"
              color="primary"
            >
              {task?.length && task[0]?.title ? "Edit task" : "Add task"}
            </Button>
          </FormGroup>
        </form>
      </Container>
    </Dialog>
  );
}

export default AddTask;
