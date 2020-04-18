import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const { io } = req;

  io.emit('serverUpdate', 'Update from resolver');
  res.send('Queried to /test routing');
});

export default router;
