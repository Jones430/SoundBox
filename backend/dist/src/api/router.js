'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _album = require('../models/album');

var _album2 = _interopRequireDefault(_album);

var _albumService = require('../services/albumService');

var _albumService2 = _interopRequireDefault(_albumService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

/**
 * GET all albums
 */
router.get('/albums', async function (req, res, next) {
  var albumService = new _albumService2.default();
  var data = await albumService.GetAllAlbum();
  res.status(200).json({
    data: data
  });
});

/**
 * POST album
 */
router.post('/album', async function (req, res, next) {
  var body = req.body;

  if (req.body) {
    var albumService = new _albumService2.default();
    await albumService.CreateAlbum(req.body);
    res.status(200).json({ message: 'Inserted' });
  } else {
    res.status(500).json({ message: 'Insert error' });
  }
});

/**
 * PUT album
 */
router.put('/album/:id', async function (req, res, next) {
  var body = req.body,
      params = req.params;

  if (params.id && body) {
    var albumService = new _albumService2.default();
    await albumService.UpdateAlbum(params.id, body);
    res.status(200).json({ message: 'Updated' });
  } else {
    res.status(500).json({ message: 'Update error' });
  }
});

/**
 * DELETE album /:id
 */
router.delete('/album/:id', async function (req, res, next) {
  var params = req.params;

  if (params.id) {
    var albumService = new _albumService2.default();
    await albumService.RemoveAlbum(params.id);
    res.status(200).json({ message: 'Deleted' });
  } else {
    res.status(500).json({ message: 'Delete error' });
  }
});

exports.default = router;