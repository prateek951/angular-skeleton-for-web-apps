import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';

@Component({
  selector: 'app-previous-trainings',
  templateUrl: './previous-trainings.component.html',
  styleUrls: ['./previous-trainings.component.css']
})
export class PreviousTrainingsComponent implements OnInit, AfterViewInit {
  displayedColumns = ['date','name','duration','calories','state'];
  dataSource = new MatTableDataSource<Exercise>();

  @ViewChild(MatSort) sort:MatSort;
  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.dataSource.data = this.trainingService.getCompletedOrCancelledExercises();
  }
  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }
  doFilter(filterValue:string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
