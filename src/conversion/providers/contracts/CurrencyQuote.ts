export interface CurrencyQuote {
    getConversionCurrencyPurchaseValue: (originalCurrency: string, conversionCurrency: string) => Promise<number>

}
