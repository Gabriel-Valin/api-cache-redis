import { getAllUsers } from "../repositories/find-all"
import redis from "./cache"
export const CACHE_KEY = 'users'

export const listAllUsersService = async () => {
    const cachedUsers = await redis.get(CACHE_KEY)
    if (cachedUsers) {
        return JSON.parse(cachedUsers)
    }
    const users = getAllUsers()
    await redis.set(CACHE_KEY, JSON.stringify(users))
    return users
}