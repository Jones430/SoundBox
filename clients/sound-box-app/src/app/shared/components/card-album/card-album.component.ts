import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Album } from 'src/models/album';
import { DialogComponent } from '../dialog/dialog.component';
import { ModalCreateAlbumComponent } from '../modal-create-album/modal-create-album.component';

@Component({
  selector: 'app-card-album',
  templateUrl: './card-album.component.html',
  styleUrls: ['./card-album.component.scss']
})
export class CardAlbumComponent implements OnInit {

  @Input() album: Album;

  @Output() onAlbumRemove: EventEmitter<any> = new EventEmitter<any>();
  @Output() onAlbumUpdate: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openMoreDialog(): void {
    this.dialog.open(DialogComponent, {
      data: {
        album: this.album
      }
    });
  }

  openUpdateDialog(): void {
    const dialogRef = this.dialog.open(ModalCreateAlbumComponent, {
      data: {
        isUpdate: true,
        album: this.album
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.onAlbumUpdate.emit(result.event);
      }
    });
  }

  removeAlbum(): void {
    this.onAlbumRemove.emit(this.album);
  }

}
