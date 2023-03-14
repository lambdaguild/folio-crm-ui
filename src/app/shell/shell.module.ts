import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';


import { AuthModule } from '@app/auth';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './../material.module';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [CommonModule, AuthModule, RouterModule, MaterialModule],
  declarations: [HeaderComponent, ShellComponent, FooterComponent, SidenavComponent],
})
export class ShellModule {}
