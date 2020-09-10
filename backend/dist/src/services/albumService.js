'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _album = require('../models/album');

var _album2 = _interopRequireDefault(_album);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AlbumService = function () {
  function AlbumService() {
    _classCallCheck(this, AlbumService);
  }

  _createClass(AlbumService, [{
    key: 'CreateAlbum',
    value: async function CreateAlbum(data) {
      var newInsert = new _album2.default();
      newInsert.title = data.title;
      newInsert.description = data.description;
      newInsert.publishing_date = data.publishing_date;
      newInsert.cover_b64 = data.cover_b64;
      var response = await newInsert.save();
      return response;
    }
  }, {
    key: 'GetAlbumById',
    value: async function GetAlbumById(id) {
      var response = await _album2.default.findById(id);
      return response;
    }
  }, {
    key: 'GetAllAlbum',
    value: async function GetAllAlbum() {
      var response = await _album2.default.find({});
      return response;
    }
  }, {
    key: 'RemoveAlbum',
    value: async function RemoveAlbum(albumId) {
      console.log(albumId);
      var response = await _album2.default.findOneAndDelete(albumId);
      return response;
    }
  }, {
    key: 'UpdateAlbum',
    value: async function UpdateAlbum(id, data) {
      var response = await _album2.default.findOneAndUpdate({ _id: id }, data);
      if (response) {
        var findAlbumUpdated = await this.GetAlbumById(id);
        return findAlbumUpdated;
      }
      return response;
    }
  }]);

  return AlbumService;
}();

exports.default = AlbumService;