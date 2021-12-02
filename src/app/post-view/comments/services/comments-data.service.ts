import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

import { Comments } from '../interfaces/comments.interface';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsDataService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'aadfdgsgoew909wwkdh12290haf'
    })
  }

  apiUrl = environment.backendApi;

  constructor(private http: HttpClient) {
  }

  getComments() {
    return this.http.get<Comments[]>(`${this.apiUrl}/comments`)
  }

  postComments(commentsObj: Comments) {
    return this.http.post<Comments>(`${this.apiUrl}/comments`, commentsObj, this.httpOptions).pipe(
        catchError((e) => this.handleError(e))
      );
  }

  handleError(error: HttpErrorResponse) {
    console.log(error);
    if (error.error === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
