import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements  OnInit {

  constructor (private afAuth: AngularFireAuth, private router: Router) {} 

    dataUser: any;

    ngOnInit(): void {
      
      }

    


    LogOut(){
     this.afAuth.signOut().then (() => this.router.navigate(['/login'])); 
    }




}
