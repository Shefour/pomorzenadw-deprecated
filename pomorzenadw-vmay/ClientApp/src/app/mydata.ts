import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Place } from '../models/place.model';

@Injectable({
  providedIn: 'root'
})
export class MyData {
  private placeUrl = "http://dzikus13-001-site1.btempurl.com/api/Place";

  constructor(private http: HttpClient) { }

  getPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(this.placeUrl).pipe(
      catchError(this.handleError)
    );
  }

  getPlaceById(id: number): Observable<Place> {
    return this.http.get<Place>(`${this.placeUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = error.error.message;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
