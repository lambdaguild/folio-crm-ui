import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { Shell } from '@app/shell/shell.service';
import { AccountsComponent } from './accounts/accounts.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data: { title: 'Home' },
      children: [
        {
          path: '',
          redirectTo: 'accounts',
          pathMatch: 'full'
        },
        {
          path: 'accounts',
          component: AccountsComponent
        },
        {
          path: 'client-list',
          component: ClientListComponent
        },
        {
          path: 'client-detail',
          component: ClientDetailComponent
        }
      ] },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class HomeRoutingModule {}
