import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
})
export class PagesModule {}
