import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacepComponent } from './listacep.component';

describe('ListacepComponent', () => {
  let component: ListacepComponent;
  let fixture: ComponentFixture<ListacepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListacepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
