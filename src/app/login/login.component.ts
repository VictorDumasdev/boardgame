import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  login() : void {
    console.log(this.loginForm.value);
    this.http.post('http://localhost:3000/users', {login: this.loginForm.value.login, password: this.loginForm.value.password}).subscribe(data => {
      console.log('login', data)

})
  }

}
