import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from './item.model';

const BASE_URL = 'http://localhost:3000/items/';

@Injectable()
export class ItemsService {
  constructor(private http: HttpClient) {}

  loadItems() {
    return this.http.get(BASE_URL);
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
}
