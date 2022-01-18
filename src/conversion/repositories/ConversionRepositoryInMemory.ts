import { Conversion } from '../entities/Conversion'
import { ConversionRepository } from './contracts/ConversionRespository'
import { v4 as uuidv4 } from 'uuid'

class ConversionRepositoryInMemory implements ConversionRepository {
    private readonly conversions: Conversion[] = []

    async save(conversionData: Conversion): Promise<Conversion> {
        const conversion = new Conversion(
            uuidv4(),
            conversionData.originalCurrency,
            conversionData.conversionCurrency,
            conversionData.originalAmount,
            conversionData.convertedAmount

        )

        this.conversions.push(conversion)
        return conversion
    }

    async getAll(): Promise<Conversion[]> {
        return this.conversions
    }
}

export default new ConversionRepositoryInMemory()
