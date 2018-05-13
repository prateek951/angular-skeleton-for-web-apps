import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-sidenavlist',
  templateUrl: './sidenavlist.component.html',
  styleUrls: ['./sidenavlist.component.css']
})
export class SidenavlistComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter<void>();
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onClose(){
    this.sidenavClose.emit();
  }
  onLogout(){
    this.onClose();    
    this.authService.logoutUser();
  }
}
