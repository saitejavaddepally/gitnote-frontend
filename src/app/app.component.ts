// app.component.ts
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserState } from './state/app.state';
import { selectAllUsers, selectUserState } from './state/user/user.selectors';
import { addUser, loadUsers } from './state/user/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  users$: Observable<any>;

  id: any = 1;

  constructor(private store: Store<UserState>) {
    this.users$ = this.store.select(selectAllUsers);
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  loadAllUsers() {
    this.store.dispatch(loadUsers());
  }

  addNewUser() {


    const newUser = { id: this.id, name: 'John Doe', email: 'john@example.com', role: 'MAKER' };
    this.id = this.id + 1;

    this.store.dispatch(addUser({ user: newUser }));

  }
}
