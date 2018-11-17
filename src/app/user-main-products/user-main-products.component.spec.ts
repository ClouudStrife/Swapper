import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMainProductsComponent } from './user-main-products.component';

describe('UserMainProductsComponent', () => {
  let component: UserMainProductsComponent;
  let fixture: ComponentFixture<UserMainProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMainProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMainProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
