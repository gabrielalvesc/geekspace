import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

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
    private router: Router,
   
  ) { }

  ngOnInit() {
    this.formRegister=this.formBuilder.group({
      name: ["",Validators.required],
      lastName: ["",Validators.required],
      email: ["",Validators.required],
      password:["",Validators.required],

    })
  }

  onSubmit(f: any){
    let user= new User(f.email, f.password, f.name, f.lastName)
    this.userService.addUser(user);
  }

}
