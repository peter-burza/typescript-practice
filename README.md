# Typescript Basics 📝

### New Types

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

A list od related constants. By default it is first - 0, second - 1 atc. Use const before enum to be sure the generated javascript is just simple as can be...

**Example 1**
```
const enum SeatChoice {
    AISLE,
    MIDDLE,
    WINDOW
}
const pbSeat = SeatChoice.MIDDLE
console.log(pbSeat) 
```

Result here will be ***1***

It is also possible to specify each part of the list as we want

**Example 2**
```
const enum Size { 
    Small = 1, 
    Medium = "Medium", 
    Large = 'XL'
}
let mySize: Size = Size.Large
console.log(mySize) 
```

Result here will be ***XL***

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

A variable could be eather *type1* or *type2*

```
let weight: number | string
```

**Example 1**
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

**Example 2**
```
const data1: string[] = ['1', '2', '3']

const data2: number[] = [1, 2, 3]

const data3: string[] | number[] = [1, 2, 3]
const data4: string[] | number[] = ['1', '2', '3']

const data5: (string | number)[] = [1, '2', 3, '4']
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

### Interfaces


**Example 1**
```
interface User {
    readonly dbId: number
    email: string
    userId: number
    googleId?: string
    startTrial(): string
    getCoupon(couponName: string, value: number): number
}

const peter: User = {
    dbId: 48,
    email: 'example@example.com',
    userId: 5649,
    startTrial: () => {
        return "right now"
    },
    getCoupon: (name: "hhh", value: 45) => {
        return value
    }
}
```

It is possible to add a property into an existing interface by just declaring it again.

**Example 2**
```
interface User {
    githubToken: string
}
```

You can also extend it

**Example 3**
```
interface Admin extends User {
    readonly adminId: number
}
```

### Generics

When you want to return the exact type as the passing value type is. You just set the type inside <here>

**Example 1**
```
const score: Array<number> = []
const names: Array<string> = []
```

Next example you can pass string or number and return string or number. Not usable when want to pass string and get string, and also pass number and get string.

**Example 2**
```
function identityOne(val: boolean | number): boolean | number {
    return val
}
```

Any works almost the same, but can give any type and get any type. Not recommended to use.

**Example 3**
```
function identityTwo(val: any): any {
    return val
}
```

***Generic Example***
```
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
```

Generic type array. 

**Example 4**
```
function getSearchProducts<T>(products: T[]): T | undefined {
    const myIdx = 3 
    return products[myIdx]
}
```

Arrow function with generic settlement

**Example 5**
```
const getMoreSearchProducts = <T,>(products: T[]): T | undefined=> {
    // do some database operations
    const myIdx = 4
    return products[myIdx]
}
```

> **<T,>** this is commonly used in react to say that this is not tsx syntax, this is generic.
> **undefined** is there because of the possibility that the products array could be empty, or the index is not listed in the array

We can also define more types in generic, like so:

**Example 6**
```
function anotherFunction<T, U extends Bottle>(val: T, bag: U): object {
    return {}
}
```

### Type Narrowing

In other words, it is making sure that the resulting value type is knowable in every cases of the code scenarious.

**Example 1**
```
function detectType(val: number | string ) {
    if (typeof val === "string")
        return val.toLowerCase()

    return val + 3
}

function provideId(id: string | null) {
    if (!id) {
        console.log("please provide ID");
        return
    }
    id.toLowerCase()
}
```

Here you make sure that the id could be also null, so you return from the function if it really is. But you also have to tell TS that it is possible so you write **string | null**.

#### in

Checking if is something in interface

**Example 1**
```
interface User {
    name: string,
    email: string
}

interface Admin extends User {
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin) {
    if ("isAdmin" in account)
        return account.isAdmin
    return false
}
```

But also checking if is something in the object

**Example 2**
```
const myBottle = { material: "glass", volume: 500 };

console.log("volume" in myBottle); // true
console.log("color" in myBottle);  // false
```

#### instanceof

**Example 1**
```
function func(x: Date | string) {
    if (x instanceof Date) 
        return x.getDate()
    return x.toUpperCase()
}
```

### Descriminated Union & Exhaustiveness Checking with never

Descriminated Union:

**Example 1**
```
interface Circle {
    kind: "circle"
    radius: number
}

interface Square {
    kind: "square"
    side: number
}

interface Rectangular {
    kind: "square"
    length: number
    width: number
}

type Shape = Circle | Square

function getShapeArea(shape: Shape): number {
    if (shape.kind === "circle")
        return Math.PI * shape.radius ** 2
    return shape.side * shape.side
}
```

Never Check:

This pattern is often used inside a switch statement to ensure all cases are handled.

**Example 2**
```
function getArea(shape: Shape) {
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2
        case "square":
            return shape.side * shape.side
        case "rectangular":
            return shape.length * shape.width
        
        default:
            const _defaultForShape: never = shape
            return _defaultForShape
    }
}
```

When you forgot to include some of the interfaces to check in the function, the default case will yell at you with: "Type 'Rectangular' is not assignable to type 'never'."
It is because this line
> const _defaultForShape: never = shape
is trying to assign a variable shape to a type never. In TypeScript, never means “this value should never occur.”