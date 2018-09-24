import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validate-code',
  templateUrl: './validate-code.component.html',
  styleUrls: ['./validate-code.component.css']
})
export class ValidateCodeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  btnLogin = function () {
    console.log('Entre a redireccionar');
    this.router.navigate(['login']);
  };
}
