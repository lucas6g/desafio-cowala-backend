import { Request, Response } from 'express'
import { ItemRepositoryInMemory } from '../repositories/ItemRepositoryInMemory'
import { AddItemUseCase } from '../usecases/add-item/AddItemUseCase'
export class AddItemController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name, price } = req.body

        const itemRepository = new ItemRepositoryInMemory()
        const addItemUseCase = new AddItemUseCase(itemRepository)

        const output = await addItemUseCase.execute({ name, price })

        return res.status(201).json(output)
    }
}
