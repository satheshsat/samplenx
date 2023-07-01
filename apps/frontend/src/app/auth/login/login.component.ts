import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'samplenx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMsg: string = '';
  constructor(
    private router: Router,
  ){

  }
  submit(){
    if(!this.username || !this.password){
      this.errorMsg = 'Please enter username and password'
    }
    let that =this;
    axios.post('http://localhost:3000/api', {
      username: this.username,
      password: this.password
    })
    .then(function (response) {
      console.log(response);
      that.router.navigateByUrl('/dashboard');
    })
    .catch(function (error) {
      console.log(error);
      that.errorMsg = error.error;
    });
  }
}
