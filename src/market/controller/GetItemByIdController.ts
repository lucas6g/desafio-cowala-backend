import { Request, Response } from 'express'
import itemRepository from '../repositories/ItemRepositoryInMemory'

import { GetItemByIdUseCase } from '../usecases/get-item-by-id/GetItemByIdUseCase'
export class GetItemByIdController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        const getAllItemsUseCase = new GetItemByIdUseCase(itemRepository)

        const output = await getAllItemsUseCase.execute(id)

        return res.status(200).json(output)
    }
}
