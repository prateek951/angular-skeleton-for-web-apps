import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TrainingComponent } from "./trainings/training.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
  { path: "", component: WelcomeComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "trainings", component: TrainingComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule 
   ]
})
export class AppRoutingModule {}
