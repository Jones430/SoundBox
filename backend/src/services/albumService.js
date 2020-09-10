import Album from '../models/album';

export default class AlbumService {

  constructor() {}
  
  async CreateAlbum (data) {
    let newInsert = new Album();
    newInsert.title = data.title;
    newInsert.description = data.description;
    newInsert.publishing_date = data.publishing_date;
    newInsert.cover_b64 = data.cover_b64;
    const response = await newInsert.save();
    return response;
  }

  async GetAlbumById (id) {
    const response = await Album.findById(id);
    return response;
  }

  async GetAllAlbum () {
    const response = await Album.find({});
    return response;
  }

  async RemoveAlbum (albumId) {
    const response = await Album.findOneAndDelete(albumId);
    return response;
  }

  async UpdateAlbum (id, data) {
    const response = await Album.findOneAndUpdate({ _id: id }, data);
    if (response) {
      const findAlbumUpdated = await this.GetAlbumById(id);
      return findAlbumUpdated;
    }
    return response;
  }
}