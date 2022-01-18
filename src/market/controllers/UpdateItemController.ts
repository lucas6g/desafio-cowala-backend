import { Request, Response } from 'express'
import itemRepository from '../repositories/ItemRepositoryInMemory'
import { UpdateItemUseCase } from '../usecases/update-item/UpdateItemUseCase'
export class UpdateItemController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { price } = req.body
        const { id } = req.params

        const updateItemUseCase = new UpdateItemUseCase(itemRepository)

        const output = await updateItemUseCase.execute(id, price)

        return res.status(200).json(output)
    }
}
