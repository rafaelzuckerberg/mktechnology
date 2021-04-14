import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteItemOrderComponent } from './delete-item-order.component';

describe('DeleteItemOrderComponent', () => {
  let component: DeleteItemOrderComponent;
  let fixture: ComponentFixture<DeleteItemOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteItemOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteItemOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
