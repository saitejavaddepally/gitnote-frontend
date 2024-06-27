import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.state';

export const selectUserState = createFeatureSelector<UserState>('userState');

export const selectAllUsers = createSelector(selectUserState, (state) => state.users);
export const selectSelectedUser = createSelector(selectUserState, (state) => state.selectedUser);
