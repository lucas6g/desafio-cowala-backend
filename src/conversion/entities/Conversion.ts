export class Conversion {
    id: string
    originalCurrency: string
    conversionCurrency: string
    originalAmount: number
    convertedAmount: number

    constructor(
        id: string,
        originalCurrency: string,
        conversionCurrency: string,
        originalAmount: number,
        convertedAmount: number) {
        this.id = id
        this.originalCurrency = originalCurrency
        this.conversionCurrency = conversionCurrency
        this.originalAmount = originalAmount
        this.convertedAmount = convertedAmount
    }
}
