import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { ClientRegisterComponent } from "./client-register/client-register.component";
import { CostumerConsultationComponent } from "./costumer-consultation/costumer-consultation.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'client-register',
    component: ClientRegisterComponent
  },
  {
    path: 'costumer-consultation',
    component: CostumerConsultationComponent
  },
  {
    path:'forgot-password',
    component: ForgotPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }