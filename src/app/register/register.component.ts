import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  registerFormGroup = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl("")
  });
  constructor(private authService: AuthServiceService){}

  ngOnInit() {
    this.initForm();
  }
  initForm(){}

  registerProcess(){
    console.log("I was clicked");
    console.log(this.registerFormGroup.value);
    if(this.registerFormGroup.valid){
      this.authService.register(this.registerFormGroup.value).subscribe(result => {
        console.log("I am here...");
        console.log(result.status);
        if(result.status == "00"){
          window.location.href = '';
          // We will redirect the page to go to the login page.
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
