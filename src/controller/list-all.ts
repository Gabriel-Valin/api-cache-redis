import { listAllUsersService } from "../services/list-service";
import { Request, Response } from "express";

export const usersAll = async (req: Request, res: Response) => {
    const execute = await listAllUsersService()
    return res.status(200).json({ execute })
}
