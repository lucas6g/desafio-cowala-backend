import { Router } from 'express'
import { AddItemController } from '../controllers/AddItemController'
import { DeleteItemController } from '../controllers/DeleteItemController'
import { GetAllItemsController } from '../controllers/GetAllItemsController'
import { GetItemByIdController } from '../controllers/GetItemByIdController'
import { UpdateItemController } from '../controllers/UpdateItemController'

const itemRoutes = Router()

const addItemController = new AddItemController()
const updateItemController = new UpdateItemController()
const getAllItemsController = new GetAllItemsController()
const getIitemByIdController = new GetItemByIdController()
const deleteItemController = new DeleteItemController()

itemRoutes.post('/', addItemController.handle)
itemRoutes.put('/:id', updateItemController.handle)
itemRoutes.get('/', getAllItemsController.handle)
itemRoutes.get('/:id', getIitemByIdController.handle)
itemRoutes.delete('/:id', deleteItemController.handle)

export { itemRoutes }
