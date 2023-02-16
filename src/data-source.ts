import { DataSource, DataSourceOptions } from 'typeorm';
import * as path from 'path';
import { TodoEntity } from './entities/todo.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

interface DataSourceDocType {
  driver: 'postgres';
  dialect: 'postgres';
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

const doc: Record<string, DataSourceDocType> = {
  database: {
    driver: 'postgres',
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'admin',
    password: 'admin',
    database: 'todo_api_db',
  },
};

// try {
//     const configPath = path.join(__dirname, '../../../config.yml')
//     doc = yaml.load(fs.readFileSync(configPath, 'utf8')) as Record<string, DataSourceDocType>
// } catch (e) {
//     console.log(e)
// }

export const dataSourceOptions: DataSourceOptions = {
  // driver: doc.database.dialect,
  type: doc.database.dialect,
  host: doc.database.host,
  port: doc.database.port,
  username: doc.database.username,
  password: doc.database.password,
  database: doc.database.database,
  synchronize: false,
  migrations: [path.join(__dirname, './migrations/*.ts')],
  entities: [TodoEntity],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
  },
} as PostgresConnectionOptions;

export default new DataSource(dataSourceOptions);
