interface Circle {
    kind: "circle"
    radius: number
}

interface Square {
    kind: "square"
    side: number
}

interface Rectangular {
    kind: "rectangular"
    length: number
    width: number
}

type Shape = Circle | Square | Rectangular

function getTrueShape(shape: Shape) {
    if (shape.kind === "circle")
        return Math.PI * shape.radius ** 2
    // return shape.side * shape.side
}

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