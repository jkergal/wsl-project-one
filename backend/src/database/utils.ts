import { DataSource, EntityTarget } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config();

const dataSource = new DataSource({
	type: 'sqlite',
	database: process.env.SQLITE_DB_PATH as string,
	synchronize: true,
	entities: [__dirname + '/../models/**/*.entity.js'],
	logging: ['query', 'error']
});

let initialized = false;
async function getDatabase() {
	if (!initialized) {
		await dataSource.initialize();
		initialized = true;
		console.log('Successfully connected to database.');
	}
	return dataSource;
}

async function getRepository(entity: EntityTarget<any>) {
	return (await getDatabase()).getRepository(entity);
}

export { getDatabase, getRepository };
