# Typescript Basics 📝

## New Types

- **any** - can be *any type*. This is not recommended to use
- **unknow**
- **never** - often used as function types, when the func does return nothing and usully just throws and error or jumpes into the loop. So the func actually does not reach its end, somehow..
- **enum** - a list of related constants
- **tuple** - this is a fixed length array

### Arrays

**Example 1**
```
let numbers: number[] = [1, 2, 3]
let numbers: string[] = ['1', '2', '3']
```

**Example 2** - there is one thing, when usin nums[index].property, it is not neccessary to use optional chaining. but in the case of the object (users[index]) it is neccessary because it is not primitive type.. TS is confused...
```
type User = {
    name: string,
    age: number
}

const nums: Array<number> = []
nums.push(1, 2)

const users: User[] = []
users.push({name: "Peter", age: 26})

console.log(nums[1] + " " + users[0]?.name)
```

### Tuple Type

Tuples are kind of **fixed length arrays, of course with specified type of every position**. But usually used as key - value pairs.

```
let user: [number, string] = [18, 'Peter']
```

### Enum Type

A list od related constants

```
const enum Size { Small = 1, Medium, Large} //Medium'll be 2, Large'll be 3...
let mySize: Size = Size.Medium
console.log(mySize) 
```

Result here will be ***2***

### Functions

```
function returnAge(age: number): string {
    return age.toString()
}
```
In this example:
- String type - sets the returning result value type. 
- Number type - sets the type of the passing in property.

By default the function returning value type is void.

**Good Practice**:
- if func does return nothing, specify that it is *void* type

### Objects

```
let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = { 
    id: 1, 
    name: 'Peter', 
    retire: (date: Date) => {
        console.log(date)
    }
}
```

### Type Aliases

**Example 1**
```
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = { 
    id: 1, 
    name: 'Peter', 
    retire: (date: Date) => {
        console.log(date)
    }
}
```

**Example 2**
```
type CardNumber = {
    cardNum: number
}
type CardHolderName = {
    cardHolderName: string
}
type CardDetails = CardNumber & CardHolderName & {
    cvv: number
}

let card: CardDetails = {
    cardNum: 1554_5668_5553_4444,
    cardHolderName: 'Peter Burza',
    cvv: 349
}

const consoleMsg = (cardDetail: CardDetails): void => {
    console.log(`
        Card Number: ${cardDetail.cardNum}, 
        Card Holder Name: ${cardDetail.cardHolderName}, 
        CVV: ${cardDetail.cvv}
    `)
}

consoleMsg(card)
```

### Union Types

You can set the weight eather number or string.

```
let weight: number | string
```

For example:

```
function kgToLbs(weight: number | string): number {
    if (typeof weight === 'number')
        return weight * 2.2
    else 
        return parseInt(weight) * 2.2
}

console.log(kgToLbs(10))
console.log(kgToLbs('10'))
```

### Intersection Types

You can set the variable/property no only one or another type. You can set it to TWO types as shown:

```
let weight: number & string
```

Often it is used in objects, like this:

```
type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}
```

### Literal Types

When you want to specify the concrete onptions that the variable can have as values, not just the type of it

```
type Quantity = 50 | 100
type Metric = 'cm' | 'inch'

let quantity1: 50 = 50
let quantity2: 50 | 100 = 50
let quantity3: Quantity = 100
```

### Nullable Types

You can set a variable/property as nullable, even undefinedable. But I'd try to avoid it..

```
function greet(name: string | null | undefined) {
    if (name) 
        console.log(name.toUpperCase())
    else
        console.log('Hola!')
}

greet(null) // OK
greet(undefined) // OK
greet('Michael') // OK
```

### Optional Chaining



We use here an:

> *Optional Property Access Operator - ***?*** 

- that does that if in any case the calling property/object/variable is null - it do not throws an error just returns undefined

Exept of using:

``` 
if (objProperty !== null && objProperty !== undefined) 
console.log(customer.birthday)
```

We could use easier way:

``` 
console.log(customer?.birthday)
```

**Usage:**
```
type Customer = {
    birthday?: Date
}
function getCustomer(id: number) : Customer | null | undefined {
return id === 0 ? null : { birthday: new Date() }
}
let customer = getCustomer(1)
console.log(customer?.birthday?.getFullYear)
```
