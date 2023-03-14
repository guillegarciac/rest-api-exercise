const express = require("express");
const router = express.Router();
const Show = require("../models/Show");

router.get('/', async (req,res,next) => {
  try {
    const shows = await Show.find();
    res.status(200).json(shows);
  } catch (error) {
    next(error)
  }
});

router.get('/:showId', async (req,res,next) => {
  const { showId } = req.params;
  try {
    const show = await Show.findById(showId);
    res.status(200).json(show);
  } catch (error) {
    next(error)
  }
});

router.post('/', async (req,res,next) => {
  try {
    const newShow = await Show.create(req.body);
    res.status(201).json(newShow);
  } catch (error) {
    next(error)
  }
});

router.put('/:showId', async (req,res,next) => {
  const { showId } = req.params;
  try {
    const editedShow = await Show.findByIdAndUpdate(showId, req.body, { new: true });
    res.status(204).json(editedShow);
  } catch (error) {
    next(error)
  }
});

router.delete('/:showId', async (req,res,next) => {
  const { showId } = req.params;
  try {
    const deletedShow = await Show.findByIdAndDelete(showId);
    res.status(201).json(deletedShow);
  } catch (error) {
    next(error)
  }
});





module.exports = router;