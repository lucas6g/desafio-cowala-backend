import { Router } from 'express'
import { itemRoutes } from './itemRoutes'
const routes = Router()

routes.use('/items', itemRoutes)

export { routes }
