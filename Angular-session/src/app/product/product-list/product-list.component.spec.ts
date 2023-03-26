import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLIstComponent } from './product-list.component';

describe('ProductLIstComponent', () => {
  let component: ProductLIstComponent;
  let fixture: ComponentFixture<ProductLIstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLIstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductLIstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
