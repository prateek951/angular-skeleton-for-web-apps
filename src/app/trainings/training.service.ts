import {Subject} from 'rxjs/Subject';
import { Exercise } from "./exercise.model";

export class TrainingService {
    exerciseChanged = new Subject<Exercise>();
    
    private availableExerices: Exercise[] = [

        {id : 'crunches',name:'Crunches',duration: 30,calories: 8},
        {id : 'touch-toes',name: 'Touch Toes',duration: 180,calories: 13},
        {id: 'side-lunges',name: 'Side Lunges',duration: 120,calories: 13},
        {id: 'burgees',name: 'Burgees',duration: 60,calories: 8}
    ];
    private runningExercise: Exercise;
    private exercises:Exercise[] = [];
    getAvailableExercises(){
        return this.availableExerices.slice();
    }
    startExercise(selectedId: string){
        const selectedExercise = this.availableExerices.find(ex => ex.id === selectedId);
        this.runningExercise = selectedExercise;
        this.exerciseChanged.next({
            ...this.runningExercise
        });
    }
    getRunningExercise(){
        return {...this.runningExercise};
    }

    completeExercise(){
        this.exercises.push({...this.runningExercise,date: new Date(),state: 'completed'});
        this.runningExercise = null;
        this.exerciseChanged.next(null);
    }
    cancelExercise(progress: number){
        this.exercises.push({
            ...this.runningExercise,
            duration: this.runningExercise.duration * (progress/100);
            calories: this.runningExercise.calories * (progress/100),
            state: 'cancelled'
        });
        this.runningExercise = null;
        this.exerciseChanged.next(null);
    }
    getCompletedOrCancelledExercises(){
        return this.exercises.slice();
    }
} 