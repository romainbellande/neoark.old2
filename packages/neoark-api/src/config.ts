import * as dotenv from 'dotenv';

const isDev: boolean = process.env.NODE_ENV !== 'production';

export class Config {
  static readonly IS_DEV: boolean = isDev;
  static readonly PORT: number = parseInt(process.env.PORT, 10);

  static readonly MONGO_URL: string = process.env.MONGO_URL;

  static readonly PLANET_MODEL: string = 'Planet';
  static readonly USER_MODEL: string = 'Player';

  static readonly JWT_SECRET: string = process.env.JWT_SECRET || 'NO_SECRET';
  static readonly JWT_EXPIRES_IN: string = '60s';
  static readonly ELASTICSEARCH_NODE: string = process.env.ELASTICSEARCH_NODE;
}
