import { Conversion } from '../entities/Conversion'
import { ConversionRepository } from './contracts/ConversionRespository'
import { v4 as uuidv4 } from 'uuid'

class ConversionRepositoryInMemory implements ConversionRepository {
    private conversions: Conversion[] = []

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

    async getOne(id: string): Promise<Conversion | undefined> {
        const conversion = this.conversions.find((conversion) => {
            return conversion.id === id
        })
        return conversion
    }

    async delete(id: string): Promise<void> {
        this.conversions = this.conversions.filter((item) => {
            return item.id !== id
        })
    }
}

export default new ConversionRepositoryInMemory()
