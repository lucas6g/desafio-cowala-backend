import { Router } from 'express'
import { AddItemController } from '../controller/AddItemController'
import { GetAllItemsController } from '../controller/GetAllItemsController'
import { UpdateItemController } from '../controller/UpdateItemController'

const itemRoutes = Router()

const addItemController = new AddItemController()
const updateItemController = new UpdateItemController()
const getAllItemsController = new GetAllItemsController()

itemRoutes.post('/', addItemController.handle)
itemRoutes.put('/:id', updateItemController.handle)
itemRoutes.get('/', getAllItemsController.handle)

export { itemRoutes }
