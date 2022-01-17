export function generatefibonacci(n: number): number[] {
    const fibonacci: number[] = []
    fibonacci[0] = 0
    fibonacci[1] = 1
    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
    }
    return fibonacci
}

console.log(generatefibonacci(6))
