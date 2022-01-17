import { Item } from '../../entities/Item'
import { InputDto } from '../../usecases/add-item/InputDto'

export interface ItemRepository {
    save: (item: InputDto) => Promise<Item>

}