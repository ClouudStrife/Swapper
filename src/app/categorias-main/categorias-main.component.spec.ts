import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasMainComponent } from './categorias-main.component';

describe('CategoriasMainComponent', () => {
  let component: CategoriasMainComponent;
  let fixture: ComponentFixture<CategoriasMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriasMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
