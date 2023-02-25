import {  Dialog, TextField } from "@mui/material";
import React, { useState } from "react";

function AddTask({ forAddTask, OpenTask }) {
 

  return (
    <div>
     
        <Dialog open={OpenTask} onClose={forAddTask} hideBackdrop>
          <div className=" w-96 ">
            <div className=" flex justify-between  p-3">
              <h1 className="text-xl">Add task</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                onClick={forAddTask}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <hr />
            <div className="p-3 text-white">
              <TextField
                id="standard-basic"
                label="Tittle"
                variant="standard"
               
                className="w-full "
                
              />
            </div>
            <div className="p-3 text-white">
              <TextField
                id="standard-basic"
                label="Description"
                variant="standard"
               
                className="w-full "
                
              />
            </div>
          </div>
        </Dialog>
     
    </div>
  );
}

export default AddTask;
