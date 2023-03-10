import { FormatListBulleted, GridView } from "@mui/icons-material";
import {
  Container,
  FormControl,

  InputLabel,
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React, { useState } from "react";

// const todo = [

// {
//     tittle : "hello",
//     description : "kjad fjhd fkjd fjhadfkjhd" ,
//     createdAt : "12/ 02 /23" ,

// }
// ]

function Alltask() {
  const [alignment, setAlignment] = useState("grid");

  const handleChangeAlign = (event , newAlignment) => {
    setAlignment(newAlignment);
  };


  
  const [first, setFirst] = useState("");

  const handleChange = (event) => {
    setFirst(event.target.value);
  };

  return (
    <div>
      <Container >
        <Typography
          
          sx={{
            my: 2,
            alignItems: "end",
            justifyContent: "center",
            textAlign: { xs: "start", lg: "center" },
            fontSize : { xs: 20, lg: 25 },
          }}
        >
          All task(3 tasks)
        </Typography>

        <Stack direction={"row"} alignItems="start" >
        
          <ToggleButtonGroup
            sx={{flexGrow : 1 , marginTop : 1.3}}
            size="small"
            aria-label="Small sizes"
            exclusive
            value={alignment}
            onChange={ handleChangeAlign}
          >
            <ToggleButton value="list" aria-label="list" >
              <FormatListBulleted />
            </ToggleButton>

            <ToggleButton value="grid" aria-label="grid">
              <GridView />
            </ToggleButton>
          </ToggleButtonGroup>
          

          
          <FormControl variant="standard" sx={{ width: 200, height: 40  }}>
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




      </Container>
    </div>
  );
}

export default Alltask;
