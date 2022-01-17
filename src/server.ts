import express from 'express'
import { routes } from './market/routes'

const app = express()

app.use(express.json())

app.use(routes)

app.listen(3333, () => {
    console.log('server start at port 3333')
})
