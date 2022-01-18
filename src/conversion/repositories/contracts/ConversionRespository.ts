import { Conversion } from '../../entities/Conversion'

export interface ConversionRepository {
    save: (conversionData: Conversion) => Promise<Conversion>
}
