import { Config } from '../../config/index.js';
import { MongoDBConnection } from '../providers/mongodb.js';

export class MongoRepository {
  constructor() {
    this.dbConnection = new MongoDBConnection(Config.MONGODB_URI, Config.MONGODB_DB_NAME);
    this.collectionName = Config.MONGODB_COLLECTION_NAME;
  }

  async create(document) {
    await this.dbConnection.connect(); // Asegúrate de conectar antes
    const db = this.dbConnection.getDb();
    const result = await db.collection(this.collectionName).insertOne(document);
    console.log('Document inserted:', result.insertedId);
    return result.insertedId;
  }

  async read(query = {}) {
    await this.dbConnection.connect(); // Asegúrate de conectar antes
    const db = this.dbConnection.getDb();
    const collection = db.collection(this.collectionName);
    const documents = await collection.find(query).toArray();
    return documents;
  }

  async update(filter, update) {
    await this.dbConnection.connect(); // Asegúrate de conectar antes
    const db = this.dbConnection.getDb();
    const result = await db.collection(this.collectionName).updateOne(filter, { $set: update });
    console.log(`Matched ${result.matchedCount} document(s), Modified ${result.modifiedCount} document(s)`);
    return result.modifiedCount;
  }

  async delete(filter) {
    await this.dbConnection.connect(); // Asegúrate de conectar antes
    const db = this.dbConnection.getDb();
    const result = await db.collection(this.collectionName).deleteOne(filter);
    console.log(`Deleted ${result.deletedCount} document(s)`);
    return result.deletedCount;
  }
}
