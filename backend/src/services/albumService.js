import Album from '../models/album';

export default class AlbumService {

  constructor() {}
  
  async CreateAlbum (data) {
    const response = await Album.create(data);
    return response;
  }

  async GetAlbumById (id) {
    var response = await Album.findById(id);
    return response;
  }

  async GetAllAlbum () {
    var response = await Album.find({});
    return response;
  }

  async RemoveAlbum (albumId) {
    var response = await Album.findOneAndDelete(albumId);
    return response;
  }

  async UpdateAlbum (id, data) {
    var response = await Album.findOneAndUpdate({ _id: id }, data);
    return response;
  }
}