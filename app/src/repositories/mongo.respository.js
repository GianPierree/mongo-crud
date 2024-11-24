import { Config } from '../../config';
import { MongoDBConnection } from '../providers/mongodb';

export class MongoRepository {
  constructor() {
    this.dbConnection = new MongoDBConnection(Config.MONGODB_URI, Config.MONGODB_DB_NAME);
    this.collectionName = Config.MONGODB_COLLECTION_NAME;
  }

  async create(document) {
    const db = this.dbConnection.getDb();
    const result = await db.collection(this.collectionName).insertOne(document);
    console.log('Document inserted:', result.insertedId);
    return result.insertedId;
  }

  async read(query = {}) {
    const db = this.dbConnection.getDb();
    const documents = await db.collection(this.collectionName).find(query).toArray();
    console.log('Documents found:', documents);
    return documents;
  }

  async update(filter, update) {
    const db = this.dbConnection.getDb();
    const result = await db.collection(this.collectionName).updateOne(filter, { $set: update });
    console.log(`Matched ${result.matchedCount} document(s), Modified ${result.modifiedCount} document(s)`);
    return result.modifiedCount;
  }

  async delete(filter) {
    const db = this.dbConnection.getDb();
    const result = await db.collection(this.collectionName).deleteOne(filter);
    console.log(`Deleted ${result.deletedCount} document(s)`);
    return result.deletedCount;
  }
}