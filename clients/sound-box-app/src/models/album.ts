export class Album {

  _id: string;

  title: string;

  description: string;

  publishDate: Date;

  cover_b64: string;

  constructor(_id: string, title: string, description: string, publishDate: Date, cover_b64: string) {
    this._id = _id;
    this.title = title;
    this.description = description;
    this.publishDate = publishDate;
    this.cover_b64 = cover_b64;
  }
}
