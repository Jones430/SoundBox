import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Album } from 'src/models/album';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-card-album',
  templateUrl: './card-album.component.html',
  styleUrls: ['./card-album.component.scss']
})
export class CardAlbumComponent implements OnInit {

  @Input() album: Album;

  @Output() onAlbumRemove: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(DialogComponent);
  }

  removeAlbum(): void {
    this.onAlbumRemove.emit(this.album);
  }

}
