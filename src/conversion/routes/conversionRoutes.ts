import { Router } from 'express'
import { CreateConversionController } from '../controllers/CreateConversionController'
import { GetAllConversionsController } from '../controllers/GetAllConversionsController'
import { GetConversionByIdController } from '../controllers/GetConversionByIdController'

const conversionRoutes = Router()

const createConversionController = new CreateConversionController()
const getAllConversionsController = new GetAllConversionsController()
const getConversionByIdController = new GetConversionByIdController()

conversionRoutes.post('/', createConversionController.handle)
conversionRoutes.get('/', getAllConversionsController.handle)
conversionRoutes.get('/:id', getConversionByIdController.handle)

export { conversionRoutes }
