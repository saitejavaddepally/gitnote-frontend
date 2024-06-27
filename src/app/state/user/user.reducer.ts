import { createReducer, on } from '@ngrx/store';
import { loadUsersSuccess, addUser, updateUser, deleteUser, loadUsers } from './user.actions';
import { UserState } from './user.state';
import { User } from '../../vo/User';

export const initialState: UserState = {
    users: [],
    selectedUser: null
};

const _userReducer = createReducer(
    initialState,
    on(loadUsers, (state) => ({...state})),
    on(loadUsersSuccess, (state, { users }) => ({ ...state, users })),
    on(addUser, (state, { user }) => ({ ...state, users: [...state.users, user] })),
    on(updateUser, (state, { user }) => ({
        ...state,
        users: state.users.map((u: User) => u.id === user.id ? user : u)
    })),
    on(deleteUser, (state, { userId }) => ({
        ...state,
        users: state.users.filter((u: User) => u.id !== userId)
    })) 
);

export function userReducer(state: any, action: any) {
    console.log("Action is : " + JSON.stringify(action));
    return _userReducer(state, action );
}
