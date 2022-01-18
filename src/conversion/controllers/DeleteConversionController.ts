import { Request, Response } from 'express'
import conversionRepository from '../repositories/ConversionRepositoryInMemory'

import { DeleteConversionUseCase } from '../usecases/delete-conversion/DeleteConversionUseCase'
export class DeleteConversionController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        const deleteItemUseCase = new DeleteConversionUseCase(conversionRepository)

        await deleteItemUseCase.execute(id)

        return res.status(204).json()
    }
}
