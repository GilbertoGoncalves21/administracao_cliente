import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientDialogComponent } from "./client-register/client-dialog/client-dialog.component";
import { ClientComponent } from "./client-register/client.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { ClientResolverService } from "./client-register/client-resolver.service";

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
    path: 'client',
    component: ClientComponent
  },
  {
    path: 'client/register',
    component: ClientDialogComponent
  },
  {
    path: 'client/edit/:nome',
    component: ClientDialogComponent,
    resolve: {
      client: ClientResolverService
    }
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