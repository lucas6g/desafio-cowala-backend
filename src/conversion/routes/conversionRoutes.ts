import { Router } from 'express'
import { CreateConversionController } from '../controllers/CreateConversionController'
import { GetAllConversionsController } from '../controllers/GetAllConversionsController'

const conversionRoutes = Router()

const createConversionController = new CreateConversionController()
const getAllConversionsController = new GetAllConversionsController()

conversionRoutes.post('/', createConversionController.handle)
conversionRoutes.get('/', getAllConversionsController.handle)

export { conversionRoutes }
