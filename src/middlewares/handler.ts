import { Request, Response, NextFunction } from "express";

export function handler(controller: any, methodName: string) {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			const result = await controller[methodName](req, res, next);
			return result;
		} catch (error) {
			next(error);
		}
	};
}
