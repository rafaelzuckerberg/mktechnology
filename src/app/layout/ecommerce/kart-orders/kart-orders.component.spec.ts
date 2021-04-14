import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KartOrdersComponent } from './kart-orders.component';

describe('KartOrdersComponent', () => {
  let component: KartOrdersComponent;
  let fixture: ComponentFixture<KartOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KartOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KartOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
