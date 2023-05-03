import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of, pluck } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  result$ = this.http.get(`/api/`).pipe(catchError(() => of('failed...')));

  tables$ = this.http.get(`/api/tables`).pipe(pluck('results'));

  constructor(private http: HttpClient) {}
}
