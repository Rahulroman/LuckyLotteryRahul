import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from '../../services/api-call.service';
import { User } from '../../model/register';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
constructor (private router : Router , private ApiCallService : ApiCallService){}

// user = {
//   email: "",
//   password: "123",
//   username: "admin",
//   errorMessage: "",
//   successMessage: ""
// };

user : User =new  User();

onSubmit(){

console.log("component" + this.user);

 var result  = this.ApiCallService.post_api(this.user);
 console.log(result);
}

  goToLogin(){

    this.router.navigate(["/login"]);

  }
}
