import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidoCarrouselComponent } from './partido-carrousel.component';

describe('PartidoCarrouselComponent', () => {
  let component: PartidoCarrouselComponent;
  let fixture: ComponentFixture<PartidoCarrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartidoCarrouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidoCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
