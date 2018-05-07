import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

const routes:Routes = [
    {path: '',component: WelcomeComponent},
    {path: 'register',component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: 'trainings',component: TrainingsComponent}

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule {}