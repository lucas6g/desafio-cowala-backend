import { Router } from 'express'
import { itemRoutes } from '../../market/routes/itemRoutes'
import { conversionRoutes } from '../../conversion/routes/conversionRoutes'
const routes = Router()

routes.use('/items', itemRoutes)
routes.use('/conversions', conversionRoutes)

export { routes }
