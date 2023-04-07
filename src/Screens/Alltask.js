import {
  Clear,
  DateRange,
  Delete,
  Done,
  FormatListBulleted,
  GridView,
  MoreVert,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControl,
  Hidden,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import AddTask from "../Components/AddTask";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useDispatch, useSelector } from "react-redux";
import {
  CompleteTodo,
  DeleteTodo,
  ImportantTodo,
} from "../Reducers/todoReducer";

function Alltask() {
  const [alignment, setAlignment] = useState("grid");
  const [taskOpen, SetTaskOpen] = useState(false);
  const [first, setFirst] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTaskDialog = () => {
    setTasks([])
    SetTaskOpen(!taskOpen);
  };

  const handleChangeAlign = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const task = useSelector((state) => state.Todo.todoList);
  const [earlier, setEarlier] = useState();

  const sortToEarlier = (event) => {
    setFirst(event.target.value);
    if (first === 10) {
      const sorted = [...task].sort(
        (a, b) =>
          new Date(...a.date.split("/").reverse()) -
          new Date(...b.date.split("/").reverse())
      );
      return setEarlier(sorted);
    } else {
      const sorted = [...task].sort(
        (a, b) =>
          new Date(...b.date.split("/").reverse()) -
          new Date(...a.date.split("/").reverse())
      );
      return setEarlier(sorted);
    }
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const dispatch = useDispatch();
  const deleteTask = (id) => {
    dispatch(DeleteTodo(id));
    if (earlier?.length) {
      setEarlier(earlier.filter((task) => task.id !== id));
    }
  };

  const handleEdit = (id) => {
    const edit = task.filter((filter) => filter.id === id);
    setTasks(edit);
    SetTaskOpen(!taskOpen);
  };

  return (
    <div>
     
        <Box sx={{ p: { xs: 1, md: 3 } }}>
          <Typography
            sx={{
              my: 2,
              alignItems: "end",
              justifyContent: "center",
              textAlign: { xs: "start", lg: "center" },
              fontSize: { xs: 20, lg: 25 },
            }}
          >
            {task?.length >= 1 ? `All task (${task?.length === 1
              ? `only ${task?.length} task`
              : `${task?.length} tasks`})` : "No Task"}
           
            
          </Typography>
          <AddTask
            forAddTask={handleTaskDialog}
            OpenTask={taskOpen}
            task={tasks}
          />

          <Stack direction={"row"} alignItems="start">
            <ToggleButtonGroup
              sx={{ flexGrow: 1, marginTop: 1.3 }}
              size="small"
              aria-label="Small sizes"
              exclusive
              value={alignment}
              onChange={handleChangeAlign}
            >
              <ToggleButton value="list" aria-label="list">
                <FormatListBulleted />
              </ToggleButton>

              <ToggleButton value="grid" aria-label="grid">
                <GridView />
              </ToggleButton>
            </ToggleButtonGroup>

            <FormControl variant="standard" sx={{ width: 200, height: 40 }}>
              <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
              <Select
                sx={{ height: 40 }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={first}
                label="Sort by"
                onChange={sortToEarlier}
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value={20}>Earlier first</MenuItem>
                <MenuItem value={10}>later first</MenuItem>
              </Select>
            </FormControl>
          </Stack>

          <Box
            mt={4}
            sx={
              alignment === "grid"
                ? {
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: { xs: "space-between", md: "start" },
                  }
                : { display: "flex", flexDirection: "column" }
            }
          >
            {(earlier ? earlier : task).map((data, i) => {
              return (
                <Box
                  key={i}
                  sx={{
                    p: { xs: 1, sm: 2 },
                    height: 260,
                    width:
                      alignment === "grid"
                        ? {
                            xs: "44%",
                            sm: "47%",
                            md: "30%",
                            lg: "30%",
                            xl: "23%",
                          }
                        : "96%",

                    position: "relative",

                    m: 1,
                    border: 1,
                    borderRadius: 2,
                    ":hover": { boxShadow: "0 1px 6px 1px lightgrey" },
                  }}
                >
                  <Box
                    sx={{
                      height: 1,
                      display: "flex",
                      alignItems: "flex-end",
                      flexDirection: "column",
                      justifyContent: "start",
                    }}
                  >
                    <Box sx={{ width: 1, height: 1 }}>
                      <Stack
                        direction={"row"}
                        gap={1}
                        mb={2}
                        alignItems={"center"}
                      >
                        <Box
                          sx={{
                            flexGrow: 1,
                            flexDirection: "row",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Hidden only={alignment === "grid" ? "xs" : undefined}>
                            <DateRange sx={{ fontSize: 17, marginRight: 1 }} />
                          </Hidden>
                          <Typography sx={{ fontSize: { xs: 12, sm: 15 } }}>
                            {data.date}
                          </Typography>
                        </Box>
                        <IconButton
                          size="small"
                          title="more"
                          onClick={() => handleEdit(data.id)}
                        >
                          <MoreVert />
                        </IconButton>
                      </Stack>
                      <Typography sx={{ fontWeight: "bold" }}>
                        {data.title}
                      </Typography>
                      {alignment === "grid" ? (
                        <Typography sx={{ pb: 2, width: 1 }}>
                          {data?.description?.slice(0, 60)}...
                        </Typography>
                      ) : (
                        <Typography sx={{ pb: 2, width: 1 }}>
                          {data?.description?.slice(0, 100)}...
                        </Typography>
                      )}
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "end",

                        width: 1,
                        borderTop: 1,
                        borderStyle: "dashed",
                        borderColor: "gray",
                      }}
                    >
                      <Hidden lgUp={true}>
                        <Tooltip
                          title={`${
                            data.completed === true
                              ? "undone task"
                              : "done task"
                          }`}
                          placement="top"
                          arrow
                          TransitionProps={{ timeout: 600 }}
                        >
                          <Checkbox
                            {...label}
                            onClick={() => dispatch(CompleteTodo(data.id))}
                            checked={data.completed === true ? true : false}
                            icon={
                              <Avatar
                                sx={{
                                  width: { xs: 30, md: 40 },
                                  height: { xs: 30, md: 40 },
                                }}
                              >
                                <Done />
                              </Avatar>
                            }
                            checkedIcon={
                              <Avatar
                                sx={{
                                  width: { xs: 30, md: 40 },
                                  height: { xs: 30, md: 40 },
                                  bgcolor: "#2195f2",
                                }}
                              >
                                <Clear />
                              </Avatar>
                            }
                          />
                        </Tooltip>
                      </Hidden>
                      <Hidden lgDown={true}>
                        <Tooltip
                          title={`${
                            data.completed === true
                              ? "undone task"
                              : "done task"
                          }`}
                          placement="top"
                          arrow
                          TransitionProps={{ timeout: 600 }}
                        >
                          <Checkbox
                            size="small"
                            {...label}
                            onClick={() => dispatch(CompleteTodo(data.id))}
                            checked={data.completed === true ? true : false}
                            icon={
                              <Typography
                                sx={{
                                  border: 1,
                                  borderStyle: "dashed",
                                  borderRadius: 5,
                                  padding: 0.5,
                                  fontSize: 12,
                                }}
                              >
                                complete
                              </Typography>
                            }
                            checkedIcon={
                              <Typography
                                sx={{
                                  border: 1,
                                  borderStyle: "dashed",
                                  borderRadius: 5,
                                  padding: 0.5,
                                  fontSize: 12,
                                }}
                              >
                                Un complete
                              </Typography>
                            }
                          />
                        </Tooltip>
                      </Hidden>

                      <Stack direction={"row"} alignItems="start">
                        <Checkbox
                          size="small"
                          onClick={() => dispatch(ImportantTodo(data.id))}
                          {...label}
                          checked={data.important === true ? true : false}
                          icon={<BookmarkBorderIcon />}
                          checkedIcon={<BookmarkIcon />}
                        />

                        <IconButton
                          size="small"
                          title="delete"
                          onClick={() => deleteTask(data.id)}
                        >
                          <Delete />
                        </IconButton>
                      </Stack>
                    </Box>
                  </Box>
                </Box>
              );
            })}
            <Button
              onClick={handleTaskDialog}
              sx={{
                p: { xs: 1, sm: 2 },
                width:
                  alignment === "grid"
                    ? { xs: "44%", sm: "47%", md: "30%", lg: "30%", xl: "23%" }
                    : "96%",

                m: 1,
                border: 1,
                borderStyle: "dashed",
                display: "flex",
                height: 260,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 2,
                ":hover": { boxShadow: 6 },
              }}
            >
              <Typography variant="h4"> + </Typography>
            </Button>
          </Box>
        </Box>
     
    </div>
  );
}

export default Alltask;
