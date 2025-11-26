import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserLogin } from '../../model/UserModels';
import { ApiCallService } from '../../services/api-call.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router, private apiCallService: ApiCallService) { }

  userLogin: UserLogin = {
    userName: "",
    password: ""
  }

  onSubmit() {

    this.apiCallService.post("login", this.userLogin).subscribe({
      next: (res) => {
        alert(res.message);
        console.log(res);
        if (res?.data) {
          this.router.navigate(['/dashboard']);
        }
      },
      error: (err) => {

        console.log("login fail");
      }
    })


  }


  goToRegister() {

    this.router.navigate(['/register']);

  }


}
