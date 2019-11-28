import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import { Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userdetails= {
                uname:"",
                password:""
  };
  

  constructor(private authService: AuthService,private router:Router) 
  {


   }

  ngOnInit()
   {
     
  }
  message;
  SingIn()
  {
   let isvalid =this.authService.CheckUser(this.userdetails);
   if(isvalid)
   {
      this.router.navigate(['home']);
   }
   else
   {
     this.message="UName/password is wrong!";
   }
  }

}
