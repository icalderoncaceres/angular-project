import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../service/security-access/user.service';

@Component({
  selector: 'app-tokenization',
  templateUrl: './tokenization.component.html',
  styleUrls: ['./tokenization.component.css']
})
export class TokenizationComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  logout(): void {
    console.log(' Logout user');
    this.userService.logout();
    // redirect to login page
    window.location.href = '/welcome';
    // this.router.navigate(['/login']);
  }
}
