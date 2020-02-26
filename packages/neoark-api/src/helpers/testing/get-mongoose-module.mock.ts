import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongooseModule } from '@nestjs/mongoose';
import { DynamicModule } from '@nestjs/common';

const mongod = new MongoMemoryServer();

export const getMongooseModuleMock = async (): Promise<DynamicModule> => {
  const port = await mongod.getPort();
  const database = await mongod.getDbName();
  return MongooseModule.forRoot(`mongodb://127.0.0.1:${port}/${database}`);
};
