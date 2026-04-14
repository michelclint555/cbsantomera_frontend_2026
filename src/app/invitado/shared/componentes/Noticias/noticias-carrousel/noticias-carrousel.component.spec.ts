import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasCarrouselComponent } from './noticias-carrousel.component';

describe('NoticiasCarrouselComponent', () => {
  let component: NoticiasCarrouselComponent;
  let fixture: ComponentFixture<NoticiasCarrouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoticiasCarrouselComponent]
    });
    fixture = TestBed.createComponent(NoticiasCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
