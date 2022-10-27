import { usersAll } from "../controller/list-all";
import { Router } from "express";
import { addNewUser } from "../controller/add-user";

export const router = Router()

router.get('/list', usersAll)
router.get('/clean-cache', addNewUser)