import { MongoRepository } from '../repositories/mongo.respository';

export class MongoService {
  constructor() {
    this.repository = new MongoRepository();
  }

  async create(document) {
    const result = await this.repository.create(document);
    console.log('Document inserted:', result.insertedId);
    return result.insertedId;
  }

  async read(query = {}) {
    const documents = await this.repository.read(query);
    console.log('Documents found:', documents);
    return documents;
  }

  async update(filter, update) {
    const result = await this.repository.update(filter, update);
    console.log(`Matched ${result.matchedCount} document(s), Modified ${result.modifiedCount} document(s)`);
    return result.modifiedCount;
  }

  async delete(filter) {
    const result = await this.repository.delete(filter);
    console.log(`Deleted ${result.deletedCount} document(s)`);
    return result.deletedCount;
  }
}