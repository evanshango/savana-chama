import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {GroupComponent} from './components/group/group.component';
import {ShellComponent} from './shared/shell/shell.component';
import {UserComponent} from './components/user/user.component';

const routes: Routes = [
  {
    path: '', component: ShellComponent, children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'groups', component: GroupComponent},
      {path: 'users', component: UserComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
