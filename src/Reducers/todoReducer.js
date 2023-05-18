import { createSlice } from "@reduxjs/toolkit";

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
];

const initialState = {
  todoList:
    localStorage.getItem("todoTask") !== null &&
    JSON.parse(localStorage.getItem("todoTask")).length
      ? JSON.parse(localStorage.getItem("todoTask"))
      : defaultTasks,
  filteredTodoList: [],
};

export const todoReducer = createSlice({
  name: "Todo",
  initialState: initialState,
  reducers: {
    AddTodo: (state, action) => {
      let newTodo = {
        id: Date.now().toString(),
        title: action.payload.title,
        important: action.payload.important,
        description: action.payload.description,
        date: action.payload.date,
        completed: action.payload.completed,
      };
      state.todoList.push(newTodo);
      localStorage.setItem("todoTask", JSON.stringify(state.todoList));
    },

    DeleteTodo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.filter((task) => task.id !== action.payload);
      localStorage.setItem("todoTask", JSON.stringify(state.todoList));
    },

    EditTodo: (state, action) => {
      const taskId = action.payload.id;

      const index = state.todoList.findIndex((task) => task.id === taskId);
      if (index !== -1) {
        state.todoList[index] = !state.todoList[index];
      }
      state.todoList[index] = action.payload;
      localStorage.setItem("todoTask", JSON.stringify(state.todoList));
    },

    ImportantTodo: (state, action) => {
      const index = state.todoList.findIndex(
        (task) => task.id === action.payload
      );
      if (index !== -1) {
        state.todoList[index].important = !state.todoList[index].important;
      }
      localStorage.setItem("todoTask", JSON.stringify(state.todoList));
    },
    CompleteTodo: (state, action) => {
      const index = state.todoList.findIndex(
        (task) => task.id === action.payload
      );
      if (index !== -1) {
        state.todoList[index].completed = !state.todoList[index].completed;
      }
      localStorage.setItem("todoTask", JSON.stringify(state.todoList));
    },
    searchTodo: (state, action) => {
      if (action.payload === "") {
        state.filteredTodoList = state.todoList.map(({ id }) => id);
      } else {
        const index = state.todoList.findIndex((task) =>
          task.title.toLowerCase().includes(action.payload.toLowerCase())
        );
        if (index !== -1) {
          state.filteredTodoList = state.todoList
            ?.filter((task) =>
              task.title.toLowerCase().includes(action.payload.toLowerCase())
            )
            .map(({ id }) => id);
        }
      }

      // localStorage.setItem("todoTask", JSON.stringify(state.todoList));
    },

    DeleteAllData: (state) => {
      state.todoList = [];
    },
  },
});

export const {
  AddTodo,
  DeleteTodo,
  EditTodo,
  ImportantTodo,
  CompleteTodo,
  searchTodo,
  DeleteAllData,
} = todoReducer.actions;
export default todoReducer.reducer;
