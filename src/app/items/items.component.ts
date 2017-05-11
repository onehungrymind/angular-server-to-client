import { Component, OnInit } from '@angular/core';
import { ItemsService, Item } from '../shared';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  selectedItem: Item;

  constructor(
    private itemsService: ItemsService
  ) {}

  ngOnInit() {
    this.getItems();
  }

  resetItem() {
    const emptyItem: Item = {id: null, name: '', description: ''};
    this.selectedItem = emptyItem;
  }

  selectItem(item: Item) {
    this.selectedItem = item;
  }

  getItems() {
    this.itemsService.loadItems()
      .subscribe(items => this.items = items);
  }

  saveItem(item: Item) {
    this.itemsService.saveItem(item)
      .subscribe(response => {
        this.getItems();
        this.resetItem();
      });
  }

  deleteItem(item: Item) {
    this.itemsService.deleteItem(item)
      .subscribe(response => {
        this.getItems();
        this.resetItem();
      });
  }
}

