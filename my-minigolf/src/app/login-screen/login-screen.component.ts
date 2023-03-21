import { Component } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent {
  show(){
    const password = <HTMLInputElement>document.getElementById("password");

    if(password!.type === "password"){
      password!.type = "text";
    }
    else {
      password.type = "password";
    }
  };
}
