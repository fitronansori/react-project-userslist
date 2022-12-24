import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_API = "https://634ce2e2f5d2cc648e96b729.mockapi.io/users";

const initialState = {
  users: [],
  status: "idle",
  error: null,
};

export const fetchUsers = createAsyncThunk("posts/fetchUsers", async () => {
  const response = await axios.get(USERS_API);
  return response.data;
});

export const addNewUsers = createAsyncThunk(
  "posts/addNewUsers",
  async (initialUsers) => {
    const response = await axios.post(USERS_API, initialUsers);
    return response.data;
  }
);

export const deleteUsers = createAsyncThunk("posts/deleteUsers", async (id) => {
  await axios.delete(`${USERS_API}/${id}`);
  return id;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducer: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(addNewUsers.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })

      .addCase(deleteUsers.fulfilled, (state, action) => {
        const index = state.users.findIndex(
          (user) => user.id === action.payload
        );
        state.users.splice(index, 1);
      });
  },
});

export const selectAllUsers = (state) => state.users.users;
export const getUsersStatus = (state) => state.users.status;
export const getUsersError = (state) => state.users.error;

export const { userDeleted } = usersSlice.actions;
export default usersSlice.reducer;
