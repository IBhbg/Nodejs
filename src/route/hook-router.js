import express from 'express'
import {HookController} from '../controllers/hook-controller.js'
import { TasksController } from '../controllers/tasks-controller.js'



export const router = express.Router()
const controller = new HookController()
const tasksController = new TasksController()

//maps HTTP verbs and route paths to controller actions.
router.post('/issue',controller.authorize, controller.index, tasksController.create)  