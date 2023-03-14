import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from './../material.module';
import { AccountsComponent } from './accounts/accounts.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';

@NgModule({
  imports: [CommonModule, SharedModule, HomeRoutingModule,MaterialModule],
  declarations: [HomeComponent, AccountsComponent, ClientListComponent, ClientDetailComponent],
})
export class HomeModule {}
