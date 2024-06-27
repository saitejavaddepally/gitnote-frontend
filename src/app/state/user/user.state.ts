import { User } from "../../vo/User";

export interface UserState {
    users: User[];
    selectedUser: User | null;
}