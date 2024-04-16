import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/store';
import { User, UsersState } from 'types/User';

const loadUsersFromLocalStorage = (): UsersState => {
  const storedUsers = localStorage.getItem('users');
  return storedUsers ? JSON.parse(storedUsers) : { users: [] };
};

const saveUsersToLocalStorage = (usersState: UsersState) => {
  localStorage.setItem('users', JSON.stringify(usersState));
};

const initialState: UsersState = loadUsersFromLocalStorage();

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
      saveUsersToLocalStorage(state);
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
        saveUsersToLocalStorage(state);
      }
    },
    removeUser: (state, action: PayloadAction<string>) => {
      const index = state.users.findIndex((user) => user.id === action.payload);
      if (index !== -1) {
        state.users.splice(index, 1);
        saveUsersToLocalStorage(state);
      }
    },
  },
});

export const { createUser, updateUser, removeUser } = usersSlice.actions;
export const usersSelector = (store: RootState) => store.users.users;
export default usersSlice.reducer;
