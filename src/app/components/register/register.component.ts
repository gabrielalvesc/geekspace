import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { Role } from 'src/app/models/role.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formRegister = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],

    });
  }

  onSubmit(f: any) {
    let role = new Role("USER", "");
    let user = new User(f.email, f.password, f.name, f.lastName, [role]);
    this.userService.createUser(user).subscribe(res => {
      console.log("Criando... "+JSON.stringify(res));
      this.authService.login(f.email, f.password).subscribe(res => {
        this.router.navigate(['/dashboard/meus-pedidos'])
      });
    });
  }

}
