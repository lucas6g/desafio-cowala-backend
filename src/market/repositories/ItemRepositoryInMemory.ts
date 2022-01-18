import { Item } from '../entities/Item'
import { ItemRepository } from './contracts/ItemRepository'
import { v4 as uuidv4 } from 'uuid'
import { InputDto } from '../usecases/add-item/InputDto'

class ItemRepositoryInMemory implements ItemRepository {
    private readonly items: Item[] = []

    async save(itemData: InputDto): Promise<Item> {
        const item = new Item(uuidv4(), itemData.name, itemData.price)

        this.items.push(item)
        return item
    }

    async update(id: string, price: number): Promise<Item> {
        console.log(this.items)
        const index = this.items.findIndex((item) => {
            return item.id === id
        })

        this.items[index].setPrice(price)
        const updatedItem = this.items[index]

        return updatedItem
    }
}

export default new ItemRepositoryInMemory()
