import { Injectable } from '@angular/core';

import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Time } from '@angular/common';

export class Task {
  taskID!: number;
  taskUserID!: number;
  taskStatus!: number;
  taskTitle!: string;
  taskTS!: Time;
}

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  // REST API
  endpoint = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getTasks(): Observable<Task> {
    return this.httpClient.get<Task>(this.endpoint + '/tasks/')
      .pipe(
        retry(0),
        catchError(this.processError)
      )
  }

  processError(err: { error: { message: string; }; status: any; message: any; }) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
  }

}