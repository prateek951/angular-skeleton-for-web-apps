import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StopTrainingComponent } from './stop-training.component';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progress:number = 0;
  timer:number;
  @Output() stopTheTraining = new EventEmitter<void>();
  constructor(private dialog: MatDialog) {

   }

  ngOnInit() {
    this.timer = setInterval(() => {
      this.progress += 5;
      if(this.progress >=100){
        clearInterval(this.timer);
      }
    },1000);
  }

  onStopTraining(){
    clearInterval(this.timer);
    // this.stopTheTraining.emit();
    const dialogRef = this.dialog.open(StopTrainingComponent,{
      data: {
        progress : this.progress
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
}
