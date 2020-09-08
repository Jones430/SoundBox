import { Injectable } from '@angular/core';
import { Album } from '../models/Album';
import { ApiService } from './api.service';
import { ApiResponse } from '../models/response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  public constructor(
    private _apiService: ApiService
  ) { }

  public getAlbums(): Observable<ApiResponse> {
    return this._apiService.get<ApiResponse>(`api/albums`);
  }

  public removeAlbum(album): Observable<ApiResponse> {
    return this._apiService.delete(`api/album`, album.id);
  }
}
