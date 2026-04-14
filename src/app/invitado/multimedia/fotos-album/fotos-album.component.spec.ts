import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosAlbumComponent } from './fotos-album.component';

describe('FotosAlbumComponent', () => {
  let component: FotosAlbumComponent;
  let fixture: ComponentFixture<FotosAlbumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FotosAlbumComponent]
    });
    fixture = TestBed.createComponent(FotosAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
