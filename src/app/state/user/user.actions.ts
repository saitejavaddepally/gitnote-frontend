import { createAction, props } from '@ngrx/store';
import { User } from '../../vo/User';

export const loadUsers = createAction('[User] Load Users');
export const loadUsersSuccess = createAction('[User] Load Users Success', props<{ users: User[] }>());
export const addUser = createAction('[User] Add User', props<{ user: User }>());
export const updateUser = createAction('[User] Update User', props<{ user: User }>());
export const deleteUser = createAction('[User] Delete User', props<{ userId: number }>());
