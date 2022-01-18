
import { ItemRepository } from '../../repositories/contracts/ItemRepository'

export class DeleteItemUseCase {
    constructor(
        private readonly itemRepository: ItemRepository
    ) { }

    async execute(id: string): Promise<void> {
        await this.itemRepository.delete(id)
    }
}
