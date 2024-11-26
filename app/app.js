import express from 'express';
import MongoRoutes from './src/routes/mongo.routes.js';

export class App {
  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  initializeMiddlewares() {
    this.app.use(express.json());
  }

  initializeRoutes() {
    this.app.use('/api/mongo', MongoRoutes);
  }
}