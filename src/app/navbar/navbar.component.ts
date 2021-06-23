import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public userSer: UserserviceService, private route: Router) {}

  public loggedIn=false;
  
  public userData = this.userSer.getUserFromSessionStorage();

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    this.userData = this.userSer.getUserFromSessionStorage();
  }

  onLogout() {
    this.userSer.logOut();
    this.route.navigate(['signin']);
  }
  onDashBord(){
    //console.log("i am dash Boad Method");
    //console.log(this.user);
    
    // if(this.user.role=="admin"){
    //   this.route.navigate(['admin']);
    // }
  }
}
