import { Item } from '../entities/Item'
import { ItemRepository } from './contracts/ItemRepository'
import { v4 as uuidv4 } from 'uuid'
import { InputDto } from '../usecases/add-item/InputDto'

export class ItemRepositoryInMemory implements ItemRepository {
    private readonly items: Item[] = []

    async save(itemData: InputDto): Promise<Item> {
        const item = new Item(uuidv4(), itemData.name, itemData.price)

        this.items.push(item)

        return item
    }
}
