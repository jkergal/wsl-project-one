import { createSchool, getSchools } from '../models/School/school.manager';
import { Request, Response } from 'express';

const get = async (req: Request, res: Response): Promise<void> => {
	const schools = await getSchools();
	res.json(schools);
};

const post = async (req: Request, res: Response): Promise<void> => {
	const schoolName: string = req.body.schoolName;
	const newSchool = await createSchool(schoolName);
	res.status(201).json(newSchool);
};

export { get, post };
