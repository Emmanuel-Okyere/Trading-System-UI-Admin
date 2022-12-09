import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  // formGroup!: FormGroup;
  loginFormGroup = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  });
  constructor(private authService: AuthServiceService){}

  ngOnInit() {
    this.initForm();
  }
  initForm(){}

  loginProcess(){
    console.log("I was clicked");
    console.log(this.loginFormGroup.value);
    if(this.loginFormGroup.valid){
      this.authService.login(this.loginFormGroup.value).subscribe(result => {
        console.log("I am here...");
        if(result.status == "00"){
          sessionStorage.setItem('userDetails', JSON.stringify(result));
          sessionStorage.setItem('accessToken', result.accessToken);
          window.location.href = '/dashboard';
          // We will redirect the page to go to the dashboard page.
          console.log("We printed");
           console.log(result);
        } else {
          alert(result.message);
        }
      });
    } else {
      console.log("You tricked me.")
    }
  }

}
