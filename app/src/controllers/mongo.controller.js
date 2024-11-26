import { MongoService } from '../services/mongo.service.js';

export class MongoController {
  constructor() {
    this.service = new MongoService();
    this.create = this.create.bind(this);
    this.read = this.read.bind(this);
    this.delete = this.delete.bind(this);
    this.update = this.update.bind(this);
  }

  async read(req, res) {
    const result = await this.service.read();
    res.json(result);
  }

  async create(req, res) {
    const query = req.body;
    const result = await this.service.create(query);
    res.status(201).json(result);
  }

  async update(req, res) {
    const { id } = req.params;
    const query = req.body;
    const result = await this.service.update(id, query);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ message: 'result not found' });
    }
  }

  async delete(req, res) {
    const deleted = await this.service.delete(req.params.id);
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'result not found' });
    }
  }
}