import { Router } from 'express'
import { CreateConversionController } from '../controllers/CreateConversionController'

const conversionRoutes = Router()

const createConversionController = new CreateConversionController()

conversionRoutes.post('/', createConversionController.handle)

export { conversionRoutes }
