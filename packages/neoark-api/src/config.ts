const isDev: boolean = process.env.NODE_ENV !== 'production';

export class Config {
  static readonly IS_DEV: boolean = isDev;
  static readonly PORT: number = parseInt(process.env.PORT || '9000', 10);

  static readonly PLANET_MODEL: string = 'Planet';
  static readonly USER_MODEL: string = 'Player';

  static readonly JWT_EXPIRES_IN: number = 60 * 15;
  static readonly ELASTICSEARCH_NODE: string = process.env.ELASTICSEARCH_NODE;

  static readonly OKTA_TOKEN: string = process.env.OKTA_TOKEN;
  static readonly OKTA_HOST: string = process.env.OKTA_HOST;

  static readonly POSTGRES_URL: string = process.env.POSTGRES_URL;
}
