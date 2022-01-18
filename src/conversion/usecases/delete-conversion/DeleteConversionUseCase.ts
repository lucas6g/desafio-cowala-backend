
import { ConversionRepository } from '../../repositories/contracts/ConversionRespository'

export class DeleteConversionUseCase {
    constructor(
        private readonly conversionRepository: ConversionRepository
    ) { }

    async execute(id: string): Promise<void> {
        await this.conversionRepository.delete(id)
    }
}
