import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StopTrainingComponent } from './stop-training.component';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  currentTraining:Exercise;
  progress:number = 0;
  timer:number;
  // @Output() exitTraining = new EventEmitter<void>();
  constructor(private dialog: MatDialog,private trainingService: TrainingService) {

   }

  ngOnInit() {
   this.startOrResumeTimer();
  }
  startOrResumeTimer(){
    const step = this.trainingService.getRunningExercise().duration / 100 * 1000;
    this.timer = setInterval(() => {
      this.progress += 5;
      if (this.progress >= 100) {
        this.trainingService.completeExercise();
        clearInterval(this.timer);
      }
    }, step);
  }

  onStop(){
    clearInterval(this.timer);
    // this.stopTheTraining.emit();
    const dialogRef = this.dialog.open(StopTrainingComponent,{
      data: {
        progress : this.progress
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        //If the user wants to exit
        this.trainingService.cancelExercise(this.progress);
      }else{
        this.startOrResumeTimer();
      }
    })
  }
}
