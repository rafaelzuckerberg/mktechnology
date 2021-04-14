import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsEcommerceComponent } from './list-products-ecommerce.component';

describe('ListProductsEcommerceComponent', () => {
  let component: ListProductsEcommerceComponent;
  let fixture: ComponentFixture<ListProductsEcommerceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductsEcommerceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductsEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
