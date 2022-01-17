
import { ItemRepository } from '../../repositories/contracts/ItemRepository'
import { InputDto } from './InputDto'
import { OutputDto } from './OutPutDto'

export class AddItemUseCase {
    constructor(
        private readonly itemRepository: ItemRepository
    ) { }

    async execute({ name, price }: InputDto): Promise<OutputDto> {
        const item = await this.itemRepository.save({ name, price })

        return {
            id: item.id,
            name: item.name,
            price: item.price

        }
    }
}
