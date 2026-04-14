import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnaNoticiaComponent } from './una-noticia.component';

describe('UnaNoticiaComponent', () => {
  let component: UnaNoticiaComponent;
  let fixture: ComponentFixture<UnaNoticiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnaNoticiaComponent]
    });
    fixture = TestBed.createComponent(UnaNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
