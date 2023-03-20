import {
  Add,
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
  Container,
  Divider,
  Fab,
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
import React, { useEffect, useState } from "react";
import AddTask from "../Components/AddTask";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

// # Default  example task data  ----down here------

const defaultTasks = [
  {
    title: "Task 1",
    important: false,
    description:
      "This is the description for this task This is the description for this task,This is the description for this taskThis is the description for this taskThis is the description for this taskThis is the description for this task This is the description for this taskThis is the description for this task This is the description for this tas This is the description for this taskThis is the description for this task",
    date: "2023-04-12",
    completed: true,
    id: "t1",
  },
  {
    title: "Task 2",
    important: true,
    description: "This is the description for this task",
    date: "2023-05-15",
    completed: true,
    id: "t2",
  },

  {
    title: "Task 3",
    important: false,
    description: "This is the description for this task",
    date: "2023-08-21",
    completed: false,
    id: "t3",
  },
  {
    title: "Task 3",
    important: false,
    description: "This is the description for this task",
    date: "2023-08-21",
    completed: false,
    id: "t3",
  },
];

// # Default  example task data  ----up here------

function Alltask() {
  const [alignment, setAlignment] = useState("grid");
  const [taskOpen, SetTaskOpen] = useState(false);
  // const [checked, SetChecked] = useState(false);
  const [taskData, setTaskData] = useState([]);
  const [first, setFirst] = useState("");

  // To open Add task dialog {

  const handleTaskDialog = () => {
    SetTaskOpen(!taskOpen);
  };

  // }
  const handleChange = (event) => {
    setFirst(event.target.value);
  };

  const handleChangeAlign = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("addTask"));
    if (items) {
      setTaskData(items);
    }
  }, []);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  console.log(taskData, "taskData");



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
          All task({(taskData?.length ? taskData : defaultTasks).length})
        </Typography>
        <AddTask forAddTask={handleTaskDialog} OpenTask={taskOpen} />

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
              onChange={handleChange}
            >
              <MenuItem value={10}>Earlier first</MenuItem>
              <MenuItem value={20}>later first</MenuItem>
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
          {(taskData?.length ? taskData : defaultTasks).map((data, i) => {
            return (
              <Box
                key={i}
                sx={{
                  p: { xs: 1, sm: 2 },
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
                  <Box sx={{ width: 1 }}>
                    <Stack
                      direction={"row"}
                      gap={1}
                      mb={2}
                      alignItems={"center"}
                    >
                      <Box sx={{flexGrow : 1 , flexDirection : "row" , display : "flex" , alignItems : "center"}}>
                      <DateRange sx={{ fontSize: 17 ,marginRight : 1}} />
                      <Typography sx={{ fontSize: 15 }}>{data.date}</Typography>
                      </Box>
                      <IconButton size="small" title="more">
                        <MoreVert/>
                      </IconButton>
                    </Stack>
                    <Typography sx={{ fontWeight: "bold" }}>
                      {data.title}
                    </Typography>
                    <Typography sx={{ pb: 2, width: 1 }}>
                      {data?.description?.slice(0, 80)}...
                    </Typography>
                    <Divider sx={{ borderStyle: "dashed" }} />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "end",
                      height: 1,
                      width: 1,
                    }}
                  >
                    {/* <Hidden only={"xs"}>
                      <Box
                        sx={{
                          p: 1,
                          width: "auto",
                          border: 1,
                          borderRadius: 2,
                          borderStyle: "dashed",
                        }}
                      >
                        completed
                      </Box>
                    </Hidden> */}
                    <Tooltip
                      title="Complete task"
                      placement="top"
                      arrow
                      TransitionProps={{ timeout: 600 }}
                    >
                      <Checkbox
                        {...label}
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
                    <Stack direction={"row"} alignItems="start">
                      <Checkbox
                        {...label}
                        icon={<BookmarkBorderIcon />}
                        checkedIcon={<BookmarkIcon />}
                      />

                      <IconButton size="medium" title="delete">
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
              height : 260 ,
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
