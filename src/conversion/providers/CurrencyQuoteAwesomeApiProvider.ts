import axios from 'axios'
import { CurrencyQuote } from './contracts/CurrencyQuote'

export class CurrencyQuoteAwesomeApiProvider implements CurrencyQuote {
    BASE_URL: string = 'https://economia.awesomeapi.com.br/last/'

    async getConversionCurrencyPurchaseValue(originalCurrency: string, conversionCurrency: string): Promise<number> {
        const response = await axios.get(`${this.BASE_URL}${conversionCurrency}-${originalCurrency}`)

        const purchaseValue = response.data[`${conversionCurrency}${originalCurrency}`].bid

        return Number(purchaseValue)
    };
}
