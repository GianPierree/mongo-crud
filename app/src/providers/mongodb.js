import { MongoClient } from 'mongodb';

export class MongoDBConnection {
  constructor(uri, dbName) {
    this.uri = uri;
    this.dbName = dbName;
    this.client = null;
    this.db = null;
  }

  async connect() {
    if (this.client) {
      console.log('Already connected to MongoDB');
      return this.db;
    }

    try {
      console.log('Connecting to MongoDB...');
      this.client = new MongoClient(this.uri); // Elimina las opciones obsoletas
      await this.client.connect();
      this.db = this.client.db(this.dbName);
      console.log(`Connected to database: ${this.dbName}`);
      return this.db;
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  }

  async disconnect() {
    if (this.client) {
      await this.client.close();
      console.log('Disconnected from MongoDB');
      this.client = null;
      this.db = null;
    }
  }

  getDb() {
    if (!this.db) {
      throw new Error('Database not connected. Call connect() first.');
    }
    return this.db;
  }
}