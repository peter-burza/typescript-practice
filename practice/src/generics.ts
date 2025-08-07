const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number {
    return val
}

function identityTwo(val: any): any {
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}

function identityFour<T>(val: T): T {
    return val
}

interface Bottle {
    height: number,
    width: number
}

identityFour<Bottle>({height: 2, width: 5})


function getSearchProducts<T>(products: T[]): T | undefined {
    const myIdx = 3 
    return products[myIdx]
}

const getMoreSearchProducts = <T,>(products: T[]): T | undefined => {
    // do some database operations
    const myIdx = 4
    return products[myIdx]
}


function anotherFunction<T, U extends Bottle>(val: T, bag: U): object {
    return {}
}