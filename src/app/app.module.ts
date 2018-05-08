import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CurrentTrainingComponent } from './trainings/current-training/current-training.component';
import { NewTrainingComponent } from './trainings/new-training/new-training.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TrainingComponent } from './trainings/training.component';
import { PreviousTrainingsComponent } from './trainings/previous-trainings/previous-trainings.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TrainingComponent,
    PreviousTrainingsComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
