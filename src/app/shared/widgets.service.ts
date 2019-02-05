import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Widget } from './widget.model';

const BASE_URL = 'http://localhost:3000/widgets';

@Injectable()
export class WidgetsService {
  constructor(private http: HttpClient) {}

  loadWidgets() {
    return this.http.get(BASE_URL);
  }

  loadWidget(id) {
    return this.http.get(`${BASE_URL}${id}`);
  }

  saveWidget(widget: Widget) {
    return (widget.id) ? this.updateWidget(widget) : this.createWidget(widget);
  }

  createWidget(widget: Widget) {
    return this.http.post(`${BASE_URL}`, widget);
  }

  updateWidget(widget: Widget) {
    return this.http.patch(`${BASE_URL}${widget.id}`, widget);
  }

  deleteWidget(widget: Widget) {
    return this.http.delete(`${BASE_URL}${widget.id}`);
  }
}
