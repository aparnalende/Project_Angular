import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserserviceService } from '../services/userservice.service';
import { user } from '../User/User';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinUser={
    username:'',
    password:''
  }
  user?:user

  constructor(private servObj:UserserviceService,private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("In signin method"+this.signinUser);

    if((this.signinUser.username===''||this.signinUser.username===null)&&(this.signinUser.password===''|| this.signinUser.password===null)){
      Swal.fire("Please fill out the given fields!!","error")
    }else{
      this.servObj.getUserUsingUsername(this.signinUser.username).subscribe((data)=>{
        this.user=data;

        if(this.signinUser.password===this.user?.password){
          Swal.fire('success','','success');
          
        }else{
          Swal.fire('Enter valid credential','','error');
        }
      },
      (error)=>{
        Swal.fire('Enter valid credential','','error');
      })
    }
  }

}
