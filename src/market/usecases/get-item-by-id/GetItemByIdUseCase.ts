
import { Item } from '../../entities/Item'
import { ItemRepository } from '../../repositories/contracts/ItemRepository'

export class GetItemByIdUseCase {
    constructor(
        private readonly itemRepository: ItemRepository
    ) { }

    async execute(id: string): Promise<Item | undefined> {
        const item = await this.itemRepository.getOne(id)

        return item
    }
}
