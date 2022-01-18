
import { Conversion } from '../../entities/Conversion'
import { ConversionRepository } from '../../repositories/contracts/ConversionRespository'

export class GetConversionByIdUseCase {
    constructor(
        private readonly conversionRepository: ConversionRepository
    ) { }

    async execute(id: string): Promise<Conversion | undefined> {
        const item = await this.conversionRepository.getOne(id)

        return item
    }
}
