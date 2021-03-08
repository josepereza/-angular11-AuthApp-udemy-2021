import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public authService:AuthService, public router:Router) { }

  ngOnInit(): void {
    
  }
salir(){
  this.router.navigate(['/auth'])
  this.authService.logout();
}
}
