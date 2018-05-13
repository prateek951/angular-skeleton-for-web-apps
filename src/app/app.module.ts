import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { CurrentTrainingComponent } from './trainings/current-training/current-training.component';
import { NewTrainingComponent } from './trainings/new-training/new-training.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TrainingComponent } from './trainings/training.component';
import { PreviousTrainingsComponent } from './trainings/previous-trainings/previous-trainings.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from "./navigation/sidenavlist/sidenavlist.component";
import { StopTrainingComponent } from './trainings/current-training/stop-training.component';
import { AuthService } from './auth/auth.service';
import { TrainingService } from './trainings/training.service';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent,
    TrainingComponent,
    PreviousTrainingsComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    StopTrainingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, TrainingService],
  bootstrap: [AppComponent],
  entryComponents: [StopTrainingComponent]
})
export class AppModule {}
