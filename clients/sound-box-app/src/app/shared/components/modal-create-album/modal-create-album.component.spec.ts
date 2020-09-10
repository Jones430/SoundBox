import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateAlbumComponent } from './modal-create-album.component';

describe('ModalCreateAlbumComponent', () => {
  let component: ModalCreateAlbumComponent;
  let fixture: ComponentFixture<ModalCreateAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
