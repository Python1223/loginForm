import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:string=""
  password:string=""
  val?:boolean;

    constructor() { 
  this.val= true;
    }

    ngOnInit(): void {
    }
  loginHandler(){
    if(this.username==='1' && this.password==='1'){
      localStorage.setItem('status','success')
      this.val= true;
    }
    else{
      localStorage.setItem('status','failed')
   
  }
}

}