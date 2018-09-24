import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../service/security-access/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // Check if user is authenticated to redirect to dashboard
    if (this.userService.isAuthenticated()) {
      this.router.navigate(['/app/tokenization']);
    } else {
      // Delete existing token
      this.userService.logout();
    }
  }

}
