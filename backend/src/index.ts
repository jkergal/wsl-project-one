import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import * as schoolsControllers from './controllers/schools.controller';
import SchoolRepository from './models/School/school.repository';
import SkillRepository from './models/Skill/skill.repository';
import WilderRepository from './models/Wilder/wilder.repository';
import WilderResolver from './resolvers/Wilder.resolver';
import { buildSchema } from 'type-graphql';

const PORT = 4000;
const SCHOOLS_PATH = '/schools';

// // Wilders Routes

// app.get(WILDERS_PATH, wildersControllers.get);
// app.post(WILDERS_PATH, wildersControllers.post);
// app.put(`${WILDERS_PATH}/:id`, wildersControllers.put);
// app.delete(`${WILDERS_PATH}/:id`, wildersControllers.del);
// app.post(`${WILDERS_PATH}/:id/skills`, wildersControllers.addSkill);

// // Schools Routes

// app.get(SCHOOLS_PATH, schoolsControllers.get);
// app.post(SCHOOLS_PATH, schoolsControllers.post);
// app.delete(`${SCHOOLS_PATH}/:id`, schoolsControllers.del);

const startServer = async () => {
	const server = new ApolloServer({
		schema: await buildSchema({
			resolvers: [WilderResolver]
		}),
		csrfPrevention: true,
		cache: 'bounded',
		/**
		 * What's up with this embed: true option?
		 * These are our recommended settings for using AS;
		 * they aren't the defaults in AS3 for backwards-compatibility reasons but
		 * will be the defaults in AS4. For production environments, use
		 * ApolloServerPluginLandingPageProductionDefault instead.
		 **/
		plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })]
	});

	// The `listen` method launches a web server.
	const { url } = await server.listen();
	await SkillRepository.initializeRepository();
	await SchoolRepository.initializeRepository();
	await WilderRepository.initializeRepository();

	await SkillRepository.initializeSkills();
	await SchoolRepository.initializeSchools();
	await WilderRepository.initializeWilders();

	console.log(`🚀  Server ready at ${url}`);
};

startServer();
