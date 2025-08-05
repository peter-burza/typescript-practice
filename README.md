# Typescript Basics 📝

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

```

```