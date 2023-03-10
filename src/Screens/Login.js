import { Box,  Stack, TextField } from "@mui/material";

import React from "react";

function Login() {
  return (
    <Box flexGrow={1}  justifyContent={"center"} alignItems="center" >
      <Stack> 
      <TextField id="standard-basic" label="EMAIl" variant="standard" />
      <TextField id="standard-basic" label="PASSWORD" variant="standard" />
      </Stack>
    </Box>
  );
}

export default Login;
