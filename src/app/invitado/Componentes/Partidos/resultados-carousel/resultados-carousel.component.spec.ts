import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosCarouselComponent } from './resultados-carousel.component';

describe('ResultadosCarouselComponent', () => {
  let component: ResultadosCarouselComponent;
  let fixture: ComponentFixture<ResultadosCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultadosCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadosCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
