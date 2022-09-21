import { getSchools } from '../models/School/school.manager';
import { Request, Response } from 'express';

const get = async (req: Request, res: Response): Promise<void> => {
	const schools = await getSchools();
	res.json(schools);
};

export { get };
