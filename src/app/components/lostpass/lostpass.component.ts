import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recovery } from 'src/app/models/recovery.model';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lostpass',
  templateUrl: './lostpass.component.html',
  styleUrls: ['./lostpass.component.css']
})
export class LostpassComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService,
    private toast: ToastrService
  ) { }

  ngOnInit() {
  }


  recovery(email:string) {
    let recovery = new Recovery(email);
    this.userService.recoveryPassword(recovery).subscribe(res => {
      this.toast.info('Verifique sua caixa de entrada', 'E-mail recuperado')
      this.router.navigate(['/'])
    }, error => {
      this.toast.error('Esse cliente não existe', 'E-mail inexistente')
    })
  }

}
