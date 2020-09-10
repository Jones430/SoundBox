import express from 'express';
import Album from '../models/album';
import AlbumService from '../services/albumService';

var router = express.Router();

/**
 * GET all albums
 */
router.get('/albums', async (req, res, next) => {
  var albumService = new AlbumService();
  const data = await albumService.GetAllAlbum();
  res.status(200).json({
    data
  });
});

/**
 * POST album
 */
router.post('/album', async (req, res, next) => {
  const { body } = req;
  if (req.body) {
    var albumService = new AlbumService();
    const dataCreated = await albumService.CreateAlbum(req.body);
    if (dataCreated) {
      res.status(200).json({ message: dataCreated });
    } else {
      res.status(500).json({ message: 'Moogose error' });
    }
  } else {
    res.status(500).json({ message: 'Insert error' });
  }
});

/**
 * PUT album
 */
router.put('/album/:id', async (req, res, next) => {
  const { body, params } = req;
  if (params.id && body) {
    var albumService = new AlbumService();
    const dataUpdated = await albumService.UpdateAlbum(params.id, body);
    if (dataUpdated) {
      res.status(200).json({ message: dataUpdated });
    } else {
      res.status(500).json({ message: 'Moogose error' });
    }
  } else {
    res.status(500).json({ message: 'Update error' });
  }
});

/**
 * DELETE album /:id
 */
router.delete('/album/:id', async (req, res, next) => {
  const { params } = req;
  if (params.id) {
    var albumService = new AlbumService();
    await albumService.RemoveAlbum(params.id);
    res.status(200).json({ message: 'Deleted' });
  } else {
    res.status(500).json({ message: 'Delete error' });
  }
});

export default router;