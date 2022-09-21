import { createSchool, deleteSchool, getSchools } from '../models/School/school.manager';
import { Request, Response } from 'express';
import { getErrorMessage } from '../utils';

const get = async (req: Request, res: Response): Promise<void> => {
	const schools = await getSchools();
	res.json(schools);
};

const post = async (req: Request, res: Response): Promise<void> => {
	const schoolName: string = req.body.schoolName;
	const newSchool = await createSchool(schoolName);
	res.status(201).json(newSchool);
};

const del = async (req: Request, res: Response): Promise<void> => {
	const { id } = req.params;
	try {
		await deleteSchool(id);
		res.status(200).json({ message: `School ${id} has been successfully removed.` });
	} catch (error) {
		res.status(404).json({ error: getErrorMessage(error) });
	}
};

export { get, post, del };
