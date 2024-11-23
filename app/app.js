import express from 'express';

export class App {
  constructor() {
    this.app = express();
    this.initializeMiddlewares();
  }

  initializeMiddlewares() {
    this.app.use(express.json());
  }
}