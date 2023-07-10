import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component'; 
import { RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';



@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'user/list', component: UserListComponent },
      { path: 'user/details/:id', component: UserDetailComponent }
    ]),
  ],
  exports: [ 
    UserListComponent
  ]
})
export class UserModule { }
