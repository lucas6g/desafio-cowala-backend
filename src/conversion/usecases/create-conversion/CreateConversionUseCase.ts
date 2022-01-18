
import { CurrencyQuote } from '../../providers/contracts/CurrencyQuote'
import { ConversionRepository } from '../../repositories/contracts/ConversionRespository'
import { InputDto } from './InputDto'
import { OutputDto } from './OutPutDto'

export class CreateConversionUseCase {
    constructor(
        private readonly conversionRepository: ConversionRepository,
        private readonly currencyQuote: CurrencyQuote

    ) { }

    async execute({ conversionCurrency, originalAmount, originalCurrency }: InputDto): Promise<OutputDto> {
        const coinPrice = await this.currencyQuote.getConversionCurrencyPurchaseValue(originalCurrency, conversionCurrency)

        const convertedAmount = originalAmount * coinPrice

        const conversion = await this.conversionRepository.save({
            conversionCurrency,
            originalAmount,
            originalCurrency,
            convertedAmount: Number(convertedAmount.toFixed(2)),
            id: ''
        })
        return {
            id: conversion.id,
            conversionCurrency: conversion.conversionCurrency,
            convertedAmount: conversion.convertedAmount,
            originalAmount: conversion.originalAmount,
            originalCurrency: conversion.originalCurrency

        }
    }
}
