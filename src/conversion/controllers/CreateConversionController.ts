import { Request, Response } from 'express'
import { CurrencyQuoteAwesomeApiProvider } from '../providers/CurrencyQuoteAwesomeApiProvider'
import conversionRepository from '../repositories/ConversionRepositoryInMemory'
import { CreateConversionUseCase } from '../usecases/create-conversion/CreateConversionUseCase'

export class CreateConversionController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { originalCurrency, conversionCurrency, originalAmount } = req.body

        const currencyQuoteAwesomeApiProvider = new CurrencyQuoteAwesomeApiProvider()
        const createConversionUseCase = new CreateConversionUseCase(conversionRepository, currencyQuoteAwesomeApiProvider)

        const output = await createConversionUseCase.execute({
            originalCurrency,
            conversionCurrency,
            originalAmount
        })

        return res.status(201).json(output)
    }
}
