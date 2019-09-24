import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toast: ToastrService
  ) {

  }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]

    });
  }

  onSubmit(f: any) {
    this.authService.login(f.email, f.password).subscribe(r => {
      this.router.navigate(['/dashboard']);
    }, error => {
      this.toast.error('E-mail e/ou senha inválidos', 'Tente  novamente')
    });
  }

}
