/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';

import { ItemsService } from './items.service';
import { HttpClient } from '@angular/common/http';

class HttpClientStub {}

describe('Service: Items', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ItemsService,
        {provide: HttpClient, useClass: HttpClientStub}
      ]
    });
  });

  it('should exist', inject([ItemsService], (service: ItemsService) => {
    expect(service).toBeTruthy();
  }));
});
