import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioRegistroComponent } from './anuncio-registro.component';

describe('AnuncioRegistroComponent', () => {
  let component: AnuncioRegistroComponent;
  let fixture: ComponentFixture<AnuncioRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnuncioRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuncioRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
