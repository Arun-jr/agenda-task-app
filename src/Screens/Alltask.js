import {
  Add,
  DateRange,
  Delete,
  FormatListBulleted,
  GridView,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  Grid,
  Hidden,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import AddTask from "../Components/AddTask";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const defaultTasks = [
  {
    title: "Task 1",
    important: false,
    description: "This is the description for this task",
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

function Alltask() {
  const [alignment, setAlignment] = useState("grid");
  const [taskOpen, SetTaskOpen] = useState(false);

  const handleTaskDialog = () => {
    SetTaskOpen(!taskOpen);
  };

  const handleChangeAlign = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("addTask"));
    if (items) {
      setTaskData(items);
    }
  }, []);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  console.log(taskData, "taskData");

  const [first, setFirst] = useState("");

  const handleChange = (event) => {
    setFirst(event.target.value);
  };

  return (
    <div>
      <Box sx={{ p : {xs: 1 , md: 3 } ,}}>
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
              ? { display: "flex", flexWrap: "wrap" }
              : { display: "flex", flexDirection: "column" }
          }
        >
          {(taskData?.length ? taskData : defaultTasks).map((data, i) => {
            return (
              <Box
                key={i}
                sx={{
                  p: {xs : 1   , sm : 2 },
                  width:  alignment === "grid" ? { xs: "44%", sm: "47%", lg: "30%" } : "96%",
                  height : "80%" ,
                  m: 1,
                  border: 1,
                  borderRadius: 2,
                  ":hover": { boxShadow: 6 },
                }}
              >
                <Box>
                  <Stack direction={"row"} gap={1} mb={2} alignItems={"center"}>
                    <DateRange sx={{fontSize : 17}}  />
                    <Typography sx={{fontSize : 15}}>{data.date}</Typography>
                  </Stack>
                  <Typography sx={{fontWeight : "bold"}}>{data.title}</Typography>
                  <Typography sx={{ pb: 2,  width: 1 }}>
                    {data.description}
                  </Typography>
                  <Divider sx={{mt : 'auto'}}/>
                  <Stack direction={"row"} pt={2}>
                    <Hidden only={"xs"}>
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
                    </Hidden>
                    <Checkbox
                      {...label}
                      icon={<BookmarkBorderIcon />}
                      checkedIcon={<BookmarkIcon />}
                    />
                    <IconButton>
                      <Delete />
                    </IconButton>
                  </Stack>
                </Box>
              </Box>
            );
          })}
            <Box
              
                sx={{
                  p: {xs : 1   , sm : 2 },
                  width:  alignment === "grid" ? { xs: "44%", sm: "47%", lg: "30%" } : "96%",
                
                  m: 1,
                  border: 1,
                  borderRadius: 2,
                  ":hover": { boxShadow: 6 },
                }}
              >
               
                 
+
                 
                    
              </Box>
        </Box>

        {/* {alignment === "grid" ? (
          <Grid container mt={4}>
            <>
              {(taskData?.length ? taskData : defaultTasks).map((data, i) => {
                return (
                  <Grid
                    item
                    sm={5.5}
                    xs={5}
                    md={3.5}
                    xl={2.6}
                    key={i}
                    sx={{
                      p: 2,
                      m: 1,
                      border: 1,

                      borderRadius: 2,
                      ":hover": { boxShadow: 6 },
                    }}
                  >
                    <Box>
                      <Stack direction={"row"} gap={1} mb={2}>
                        <DateRange />
                        <Typography>{data.date}</Typography>
                      </Stack>
                      <Typography>{data.title}</Typography>
                      <Typography sx={{ pb: 2, borderBottom: 1, width: 1 }}>
                        {data.description}
                      </Typography>
                      <Stack direction={"row"} pt={2}>
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

                        <Checkbox
                          {...label}
                          icon={<BookmarkBorderIcon />}
                          checkedIcon={<BookmarkIcon />}
                        />
                        <IconButton>
                          <Delete />
                        </IconButton>
                      </Stack>
                    </Box>
                  </Grid>
                );
              })}
            </>
            <Grid
              item
              sm={5.5}
              xs={5}
              md={3.5}
              xl={2.6}
              height={300}
              sx={{
                m: 1,
                border: 1,
                borderRadius: 2,
                borderStyle: "dashed",
              }}
            >
              <Button
                onClick={handleTaskDialog}
                sx={{
                  width: 1,
                  height: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Add />
              </Button>
            </Grid>
          </Grid>
        ) : (
          <Box mt={6}>
            {(taskData?.length ? taskData : defaultTasks).map((data, i) => {
              return (
                <Stack
                  direction={"column"}
                  alignItems="start"
                  sx={{
                    p: 2,
                    my: 2,
                    border: 1,
                    borderRadius: 2,
                    ":hover": { boxShadow: 2 },
                  }}
                >
                  <Stack direction={"row"} gap={1} mb={2}>
                    <DateRange />
                    <Typography>{data.date}</Typography>
                  </Stack>

                  <Typography>{data.title}</Typography>
                  <Typography sx={{ pb: 2, borderBottom: 1, width: 1 }}>
                    {data.description}
                  </Typography>
                  <Stack direction={"row"} pt={2}>
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
                    <Checkbox
                      {...label}
                      icon={<BookmarkBorderIcon />}
                      checkedIcon={<BookmarkIcon />}
                    />
                    <IconButton>
                      <Delete />
                    </IconButton>
                  </Stack>
                </Stack>
              );
            })}

            <Stack
              direction={"column"}
              alignItems="start"
              sx={{
                my: 2,
                border: 1,
                borderRadius: 2,
                borderStyle: "dashed",
                height: 80,
              }}
            >
              <Button
                onClick={handleTaskDialog}
                sx={{
                  width: 1,
                  height: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Add />
              </Button>
            </Stack>
          </Box>
        )} */}
      </Box>
    </div>
  );
}

export default Alltask;
