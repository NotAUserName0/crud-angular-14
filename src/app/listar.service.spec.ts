import { TestBed } from '@angular/core/testing';

import { ListarService } from './listar.service';

describe('ListarService', () => {
  let service: ListarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
