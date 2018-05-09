import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-current-training',
  templateUrl: './current-training.component.html',
  styleUrls: ['./current-training.component.css']
})
export class CurrentTrainingComponent implements OnInit {
  progress:number = 0;
  timer:number;
  @Output() stopTheTraining = new EventEmitter<void>();
  constructor() { }

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
  }
}
