import { Component, OnInit } from '@angular/core';
import { Widget, WidgetsService } from '../shared';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit{
  widgets: Widget[];
  selectedWidget: Widget;

  constructor(
    private widgetsService: WidgetsService
  ) {}

  ngOnInit() {
    this.getWidgets();
    this.resetWidget();
  }

  resetWidget() {
    const emptyWidget: Widget = {id: null, name: '', description: ''};
    this.selectedWidget = emptyWidget;
  }

  selectWidget(widget: Widget) {
    this.selectedWidget = widget;
  }

  saveWidget(widget: Widget) {
    this.widgetsService.saveWidget(widget)
      .subscribe(response => {
        this.getWidgets();
        this.resetWidget();
      });
  }

  deleteWidget(widget: Widget) {
    this.widgetsService.deleteWidget(widget)
      .subscribe(response => {
        this.getWidgets();
        this.resetWidget();
      });
  }

  getWidgets() {
    this.widgetsService.loadWidgets()
      .subscribe(widgets => this.widgets = widgets);
  }
}
