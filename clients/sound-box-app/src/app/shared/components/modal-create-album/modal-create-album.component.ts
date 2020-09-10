import { Component, OnInit, Output, Optional, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Album } from '../../../../models/album';
import { AlbumService } from 'src/services/album.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-create-album',
  templateUrl: './modal-create-album.component.html',
  styleUrls: ['./modal-create-album.component.scss']
})
export class ModalCreateAlbumComponent implements OnInit {

  public isUpdate: boolean;
  public currentAlbum: Album;
  public albumForm: FormGroup;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ModalCreateAlbumComponent>
  ) {
    this.isUpdate = data ? data.isUpdate : false;
    this.currentAlbum = data ? data.album : null;
  }

  ngOnInit(): void {
    this.albumForm = new FormGroup({
      _id: new FormControl(this.currentAlbum ? this.currentAlbum._id : null),
      title: new FormControl(this.currentAlbum ? this.currentAlbum.title : ''),
      description: new FormControl(this.currentAlbum ? this.currentAlbum.description : ''),
      publishDate: new FormControl(this.currentAlbum ? this.currentAlbum.publishDate : new Date()),
      file: new FormControl('')
    });
  }

  public createOrUpdateAlbum = async (albumValue) => {
    let album = new Album(
      albumValue._id,
      albumValue.title,
      albumValue.description,
      albumValue.publishDate,
      'GridFS'
    );

    this.dialogRef.close({event: album});
  }

}
