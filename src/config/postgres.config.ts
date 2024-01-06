import { registerAs } from '@nestjs/config';

export default registerAs('postgres', () => ({
  host: process.env.POSTGRES_HOST || 'localhost',
  port: Number(process.env.POSTGRES_PORT) || 5432,
  database: process.env.POSTGRES_DATABASE || 'advanced',
  username: process.env.POSTGRES_USERNAME || 'dabinkimjae',
  password: process.env.POSTGRES_PASSWORD || '',
}));
