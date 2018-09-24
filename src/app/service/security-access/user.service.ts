import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginUserDto } from '../../model/security-access/login-user-dto';
import { GeneralResponse } from '../../model/commons/response/general-response';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { SecurityAccessConstants } from '../../util/constants/endpoints/security-access/security-access-constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) { }

  loginUser(loginUserDto: LoginUserDto): Observable<GeneralResponse> {
    console.log(' on loginUser Service');
    this.logout();
    return this.http.post<GeneralResponse>(SecurityAccessConstants.SECURITY_ACCESS_ENDPOINT + '/users/login', loginUserDto).pipe(
      tap(response => {
        if (response.success) {
          localStorage.setItem('access_token', response.data);
          console.log(' Agruegué el token a storage');
          const decodedToken = this.jwtHelper.decodeToken(response.data);
          if (decodedToken) {
            localStorage.setItem('names', decodedToken.names);
            localStorage.setItem('lastnames', decodedToken.lastnames);
            console.log(' Agruegué data adicional a storage');
          }
        }
      }

      ),
      catchError(this.handleError)
    );
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    if (token == null) {
      return false;
    } else {
      return !this.jwtHelper.isTokenExpired(token);
    }
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      // console.error(
      //   `Backend returned code ${error.status}, ` +
      //   `body was: ${error.error}`);
      // console.dir(error);
    }
    return throwError(
      error);
  }

  /**
   * Function to logout a user from the system
   */

  logout() {
    console.log(' on logout Service');
    localStorage.removeItem('access_token');
  }
}
