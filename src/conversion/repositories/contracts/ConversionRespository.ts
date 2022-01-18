import { Conversion } from '../../entities/Conversion'

export interface ConversionRepository {
    save: (conversionData: Conversion) => Promise<Conversion>
    getAll: () => Promise<Conversion[]>
    getOne: (id: string) => Promise<Conversion | undefined>

}
