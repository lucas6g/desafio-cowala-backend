import { Router } from 'express'
import { AddItemController } from '../controller/AddItemController'

const itemRoutes = Router()

const addItemController = new AddItemController()

itemRoutes.post('/', addItemController.handle)

export { itemRoutes }
