import { Request, Response } from 'express'
import conversionRepository from '../repositories/ConversionRepositoryInMemory'

import { GetAllConversionsUseCase } from '../usecases/get-all-conversions/GetAllConversionsUseCase'
export class GetAllConversionsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const getAllConversionsUseCase = new GetAllConversionsUseCase(conversionRepository)

        const output = await getAllConversionsUseCase.execute()

        return res.status(200).json(output)
    }
}
