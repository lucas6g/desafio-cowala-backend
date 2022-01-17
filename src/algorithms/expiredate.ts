export function isValidDate(date: string, expiresIn: string): boolean {
    const dateToCompare = new Date(date)
    const now = new Date()
    dateToCompare.setDate(dateToCompare.getDate() + Number(expiresIn.replace('d', '')))

    if (dateToCompare >= now) {
        return true
    }
    return false
}

console.log(isValidDate('2021-12-10T00:00:00.000Z', '180d'))
