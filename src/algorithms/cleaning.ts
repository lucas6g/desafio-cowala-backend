
export function clean(obj: any): any {
    for (const propName in obj) {
        if (obj[propName] === null || obj[propName] === undefined) {
            delete obj[propName]
        }
    }
    return obj
}

console.log(clean({ fizz: 'buzz', foo: null, bar: 42 }))
