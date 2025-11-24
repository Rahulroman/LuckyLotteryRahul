import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiCallService } from '../../services/api-call.service';
import { User } from '../../model/UserModels';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
constructor (private router : Router , private ApiCallService : ApiCallService){}

  goToLogin(){ this.router.navigate(["/login"]); }


user: User = {
  username: '',
  email: '',
  password : ''
};

  onSubmit(){

 this.ApiCallService.post("register" , this.user).subscribe({
next  : (res) => {
  console.log("dashboard");
},
error: (err) => {

  console.log("error in registration" , err);
}

 })

  }


}
