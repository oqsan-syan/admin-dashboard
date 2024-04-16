export interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber?: string;
  age?: number;
}

export interface UsersState {
  users: User[];
}

export interface UserForm {
  name: string;
  email: string;
  phoneNumber?: string;
  age?: number;
}
