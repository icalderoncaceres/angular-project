import { Component, OnInit } from '@angular/core';
import { LoginUserDto } from '../../../../../../../model/security-access/login-user-dto';
import { GeneralResponse } from '../../../../../../../model/commons/response/general-response';
import { UserService } from '../../../../../../../service/security-access/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  loginUserDto: LoginUserDto;
  generalResponse: GeneralResponse;

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
    this.loginUserDto = new LoginUserDto;
    this.generalResponse = new GeneralResponse;
  }

  ngOnInit() {
  }

  loginUser(): void {
    console.log(' on loginUser');
    this.generalResponse = new GeneralResponse;
    this.userService.loginUser(this.loginUserDto).subscribe(
      data => {
        this.generalResponse = data;
        console.dir(this.generalResponse);
        if (this.generalResponse.success) {
          this.loginUserDto = new LoginUserDto;
          this.router.navigate(['/app/tokenization']);
        }
      },
      error => {
        this.generalResponse = error.error;
        console.log(this.generalResponse.apiError.code + ' >>> ' + this.generalResponse.apiError.messageUser);
        this.loginUserDto.password = null;
        // this.notifications.error(this.generalResponse.apiError.code, this.generalResponse.apiError.messageDeveloper);
      }
    );
  }
}
