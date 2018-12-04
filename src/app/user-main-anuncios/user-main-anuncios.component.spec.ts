import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMainAnunciosComponent } from './user-main-anuncios.component';

describe('UserMainAnunciosComponent', () => {
  let component: UserMainAnunciosComponent;
  let fixture: ComponentFixture<UserMainAnunciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMainAnunciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMainAnunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
