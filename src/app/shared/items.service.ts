import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const BASE_URL = 'http://localhost:3000/items/';

@Injectable()
export class ItemsService {
  constructor(private http: HttpClient) {}

  loadItems() {
    return this.http.get(BASE_URL)
    .pipe(
      catchError(this.handleError)
    );
  }

  loadItem(id) {
    return this.http.get(`${BASE_URL}${id}`);
  }

  saveItem(item: Item) {
    return (item.id) ? this.updateItem(item) : this.createItem(item);
  }

  createItem(item: Item) {
    return this.http.post(`${BASE_URL}`, item);
  }

  updateItem(item: Item) {
    return this.http.patch(`${BASE_URL}${item.id}`, item);
  }

  deleteItem(item: Item) {
    return this.http.delete(`${BASE_URL}${item.id}`);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error('Error Status: ', error.status);
      console.error('Error Details: ', error.error);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };
}
