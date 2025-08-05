type User = {
    name: string,
    age: number
}

const nums: Array<number> = []
nums.push(1, 2)

const users: User[] = []
users.push({name: "Peter", age: 26})

console.log(nums[1] + " " + users[0]?.name)