
import { Item } from '../../entities/Item'
import { ItemRepository } from '../../repositories/contracts/ItemRepository'

export class GetAllItemsUseCase {
    constructor(
        private readonly itemRepository: ItemRepository
    ) { }

    async execute(): Promise<Item[]> {
        const items = await this.itemRepository.getAll()

        return items
    }
}
