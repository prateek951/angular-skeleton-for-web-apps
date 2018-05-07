import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { PastTrainingsComponent } from './trainings/past-trainings/past-trainings.component';
import { CurrentTrainingComponent } from './trainings/current-training/current-training.component';
import { NewTrainingComponent } from './trainings/new-training/new-training.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    RegisterComponent,
    LoginComponent,
    PastTrainingsComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    TrainingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
