
import { Item } from '../../entities/Item'
import { ItemRepository } from '../../repositories/contracts/ItemRepository'

export class UpdateItemUseCase {
    constructor(
        private readonly itemRepository: ItemRepository
    ) { }

    async execute(id: string, price: number): Promise<Item> {
        const updatedItem = await this.itemRepository.update(id, price)

        return updatedItem
    }
}
