import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-previous-trainings',
  templateUrl: './previous-trainings.component.html',
  styleUrls: ['./previous-trainings.component.css']
})
export class PreviousTrainingsComponent implements OnInit, OnDestroy {
  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource = new MatTableDataSource<Exercise>();
  private exChangedSubscription: Subscription;
  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exChangedSubscription = this.trainingService.finishedExercisesChanged.subscribe(
      (exercises: Exercise[]) => this.dataSource.data = exercises
    );
  }
  ngOnDestroy(){
    this.exChangedSubscription.unsubscribe();
  }
}
