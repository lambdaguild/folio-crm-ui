import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login.component';
import { MaterialModule } from './../material.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, AuthRoutingModule, MaterialModule],
  declarations: [LoginComponent],
})
export class AuthModule {}
