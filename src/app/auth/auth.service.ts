import {Injectable} from '@angular/core';
import { Router } from '@angular/router';
import {Subject} from 'rxjs/Subject';
import { AngularFireAuth } from 'angularfire2/auth';
import {User} from './user.model';
import {AuthData} from './auth-data.model';
import { TrainingService } from '../trainings/training.service';

@Injectable()
export class AuthService {
    authChange = new Subject<boolean>();
    private isAuthenticated = false;

    constructor(private router: Router
    ,private afauth: AngularFireAuth,
     private trainingService: TrainingService){}

    initAuthListener(){
        this.afauth.authState.subscribe(user => {
            if(user){
                this.isAuthenticated = true;
                this.authChange.next(true);
                this.router.navigate(['/training']);
            }else{
                this.trainingService.cancelSubscriptions();
                this.isAuthenticated = false;
                this.authChange.next(false);
                this.router.navigate(['/login']);
            }
        })
    }
    registerUser(authData: AuthData){
        this.afauth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
            .then(result => console.log(result))
            .catch(err => console.log(err));
        // this.successAuth();
    }
    async loginUser(authData: AuthData){
        try {
            const result = await this.afauth.auth.signInWithEmailAndPassword(authData.email, authData.password)
            if(result) console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
    logout(){
        this.afauth.auth.signOut();        
    }
    isAuth(){
        return this.isAuthenticated;
    }
}