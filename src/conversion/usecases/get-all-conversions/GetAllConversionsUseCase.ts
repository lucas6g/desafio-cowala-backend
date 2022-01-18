
import { Conversion } from '../../entities/Conversion'
import { ConversionRepository } from '../../repositories/contracts/ConversionRespository'

export class GetAllConversionsUseCase {
    constructor(
        private readonly conversionRepository: ConversionRepository
    ) { }

    async execute(): Promise<Conversion[]> {
        const conversions = await this.conversionRepository.getAll()

        return conversions
    }
}
