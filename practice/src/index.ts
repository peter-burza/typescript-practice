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