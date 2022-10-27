import redis from "../services/cache";
import { CACHE_KEY } from "../services/list-service";
import { Response, Request } from "express";

export const addNewUser = async (req: Request, res: Response) => {
    // here will create a new user
    // when user created we should cleanup cache 'cause the user list was updated

    await redis.del(CACHE_KEY)
    return res.status(200).json({ message: 'cache clean' })
}