import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lostpass',
  templateUrl: './lostpass.component.html',
  styleUrls: ['./lostpass.component.css']
})
export class LostpassComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  refresh() {

    setTimeout(this.navigateToHome.bind(this), 5000);
    console.log('Gabriel CP');
  }

  navigateToHome() {
    this.router.navigate(['/']);
    window.location.reload();
  }

}
