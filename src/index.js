import io from 'socket.io';
import express from 'express';
import mongoose from 'mongoose';
import { api, mongoDB } from './config/loggers';
import { API_PORT, MONGO_DB_URI } from './config';
import { test } from './routes';

const app = express();
const httpServer = app.listen(API_PORT);
const wsServer = io(httpServer);

// Set up middleware
app.use(express.static('public'));
app.use((req, res, next) => {
  req.io = wsServer;
  next();
});

// Relate Routers with main app
app.use('/test', test);

(async () => {
  await mongoose.connect(MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  mongoDB.success(`📀 Succesfully connected to database: ${MONGO_DB_URI}`);
  api.success(`🚀 HTTP and WS servers ready at http://localhost:${API_PORT}`);
})();
