import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../../../models/album';
import { AlbumService } from '../../../services/album.service';
import { ModalCreateAlbumComponent } from 'src/app/shared/components/modal-create-album/modal-create-album.component';
import { MatDialog } from '@angular/material/dialog';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public albums: Album[] = [];

  public albums$: Observable<Album[]>;

  constructor(
    private _albumService: AlbumService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this._albumService.getAlbums().subscribe((response: any) => {
      response.data.forEach(element => {
        const item = new Album(
          element._id,
          element.title,
          element.description,
          element.publishing_date,
          element.cover_b64);
        this.albums.push(item);
      });
    });
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(ModalCreateAlbumComponent, null);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const albumCreated = result.event;
        if (albumCreated) {
          this._albumService.addAlbum(albumCreated).subscribe((response: any) => {
            if (response) {
              const albumCreated = response.message;
              console.log('Album added');
              this.albums.push(albumCreated);
            }
          }, (error: any) => console.log(error));
        }
      }
    });
  }

  onUpdateAlbum(album: Album): void {
    this._albumService.updateAlbum(album).subscribe((response: any) => {
      console.log('Album updated');
      const albumUpdated = response.message;
      const findEl = this.albums.filter(a => a._id === albumUpdated._id)[0];
      const index = this.albums.indexOf(findEl);
      this.albums[index] = albumUpdated;
    }, (error: any) => console.log(error));
  }

  onDeleteAlbum(album: Album): void {
    this._albumService.removeAlbum(album).subscribe((response: any) => {
      const index = this.albums.indexOf(album);
      this.albums.splice(index, 1);
    }, (error: any) => console.log(error));
  }

}
