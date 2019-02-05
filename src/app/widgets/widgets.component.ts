import { Component, OnInit } from '@angular/core';
import { WidgetsService, Widget } from '../shared';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  widgets: Widget[];
  selectedWidget: Widget;

  constructor(
    private widgetsService: WidgetsService
  ) {}

  ngOnInit() {
    this.getWidgets();
  }

  resetWidget() {
    const emptyWidget: Widget = {id: null, name: '', description: ''};
    this.selectedWidget = emptyWidget;
  }

  selectWidget(widget: Widget) {
    this.selectedWidget = widget;
  }

  getWidgets() {
    this.widgetsService.loadWidgets()
      .subscribe((widgets: Widget[]) => this.widgets = widgets);
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
}

