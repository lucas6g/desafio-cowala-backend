import { Request, Response } from 'express'
import itemRepository from '../repositories/ItemRepositoryInMemory'

import { DeleteItemUseCase } from '../usecases/delete-item/DeleteItemUseCase'
export class DeleteItemController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        const deleteItemUseCase = new DeleteItemUseCase(itemRepository)

        await deleteItemUseCase.execute(id)

        return res.status(204).json()
    }
}
