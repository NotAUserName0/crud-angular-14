import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModHelpComponent } from './mod-help.component';

describe('ModHelpComponent', () => {
  let component: ModHelpComponent;
  let fixture: ComponentFixture<ModHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModHelpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
