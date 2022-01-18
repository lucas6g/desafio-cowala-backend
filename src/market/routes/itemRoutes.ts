import { Router } from 'express'
import { AddItemController } from '../controller/AddItemController'
import { UpdateItemController } from '../controller/UpdateItemController'

const itemRoutes = Router()

const addItemController = new AddItemController()
const updateItemController = new UpdateItemController()

itemRoutes.post('/', addItemController.handle)
itemRoutes.put('/:id', updateItemController.handle)

export { itemRoutes }
