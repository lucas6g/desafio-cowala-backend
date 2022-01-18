import { Request, Response } from 'express'
import conversionRepository from '../repositories/ConversionRepositoryInMemory'

import { GetConversionByIdUseCase } from '../usecases/get-conversion-by-id/GetConversionByIdUseCase'
export class GetConversionByIdController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        const getAllItemsUseCase = new GetConversionByIdUseCase(conversionRepository)

        const output = await getAllItemsUseCase.execute(id)

        return res.status(200).json(output)
    }
}
