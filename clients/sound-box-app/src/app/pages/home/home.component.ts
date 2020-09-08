import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from 'src/models/album';
import { AlbumService } from 'src/services/album.service';
import { ApiResponse } from 'src/models/response';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogCreateAlbumComponent } from 'src/app/shared/components/dialog-create-album/dialog-create-album.component';

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
        const item = new Album();
        item.id = element._id;
        item.title = element.title;
        item.description = element.description;
        this.albums.push(item);
      });
    });
  }

  openCreateDialog(): void {
    this.dialog.open(DialogCreateAlbumComponent);
  }

  onDeleteAlbum(album: Album): void {
    this._albumService.removeAlbum(album).subscribe((response: any) => {
      const index = this.albums.indexOf(album);
      this.albums.splice(index, 1);
    }, (error: any) => console.log(error));
  }

}
