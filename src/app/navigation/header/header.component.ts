import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  isAuth:boolean = false;
  authSubscription: Subscription;
  @Output() sidenavToggle = new EventEmitter<void>();
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authSubscription = 
    this.authService.authChange
    .subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }
  onToggleSidenav(){
    this.sidenavToggle.emit();
  }
  onLogout(){
    this.authService.logoutUser();
   }
  ngOnDestroy(){
    //Clears up the memory.The component dies.
    this.authSubscription.unsubscribe();
  }

}
