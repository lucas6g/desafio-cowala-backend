import { Request, Response } from 'express'
import itemRepository from '../repositories/ItemRepositoryInMemory'

import { GetAllItemsUseCase } from '../usecases/get-all-items/GetAllItemsUseCase'
export class GetAllItemsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const getAllItemsUseCase = new GetAllItemsUseCase(itemRepository)

        const output = await getAllItemsUseCase.execute()

        return res.status(200).json(output)
    }
}
